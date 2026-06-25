#!/usr/bin/env python3
import os
import sys
import re
import json
import argparse
import subprocess
from pathlib import Path
import concurrent.futures
from typing import Dict, List, Any, Set
import time

# Add current directory to path to import open_router
sys.path.append(str(Path(__file__).resolve().parent.parent.parent))
from src.agent.open_router import get_completion

def extract_all_json_blocks(text: str) -> list:
    blocks = []
    search_start = 0
    while True:
        start = text.find('{', search_start)
        if start == -1:
            break
        # Track nested braces
        brace_count = 0
        in_string = False
        escape = False
        matched = False
        for i in range(start, len(text)):
            char = text[i]
            if escape:
                escape = False
                continue
            if char == '\\':
                escape = True
                continue
            if char == '"':
                in_string = not in_string
                continue
            if not in_string:
                if char == '{':
                    brace_count += 1
                elif char == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        blocks.append(text[start:i+1])
                        search_start = i + 1
                        matched = True
                        break
        if not matched:
            search_start = start + 1
    return blocks


class JSEnv:
    """Helper class to run Node.js debundler, detector, and build dependency graph."""
    
    def __init__(self, workspace_dir: Path):
        self.workspace_dir = workspace_dir
        self.debundler_path = workspace_dir / "src/debundler/index.js"
        self.detector_path = workspace_dir / "crypto-cli-tool.js"
        self.dependencies: Dict[str, List[str]] = {}
        self.references: Dict[str, List[str]] = {}
        self.module_metadata: Dict[str, Dict[str, Any]] = {}
        
    def debundle(self, bundle_path: Path, output_dir: Path) -> bool:
        """Runs the node debundler via Webcrack."""
        print(f"[Agent JSEnv] Debundling {bundle_path} to {output_dir}...")
        cmd = ["node", str(self.debundler_path), str(bundle_path), str(output_dir)]
        try:
            res = subprocess.run(cmd, capture_output=True, text=True, check=True)
            bundle_json = output_dir / "bundle.json"
            if bundle_json.exists():
                print("[Agent JSEnv] Debundling completed successfully.")
                return True
            else:
                print(f"[Agent JSEnv] Debundler finished but bundle.json not found in {output_dir}.")
                return False
        except subprocess.CalledProcessError as e:
            print(f"[Agent JSEnv] Debundling failed: {e.stderr}")
            return False

    def _get_js_files(self, debundled_dir: Path) -> List[Path]:
        bundle_json_path = debundled_dir / "bundle.json"
        if bundle_json_path.exists():
            try:
                with open(bundle_json_path, "r", encoding="utf-8") as f:
                    bundle_data = json.load(f)
                    files = []
                    for m in bundle_data.get("modules", []):
                        m_path = debundled_dir / m["path"]
                        if m_path.exists():
                            files.append(m_path)
                    return files
            except Exception as e:
                print(f"[Agent JSEnv] Failed to read bundle.json: {e}. Falling back to default filtering.")
        
        # Fallback filter
        js_files = list(debundled_dir.glob("*.js"))
        return [f for f in js_files if f.name != "deobfuscated.js" and f.stem.isdigit()]

    def run_detector_parallel(self, js_files_map: Dict[str, Path], output_dir: Path) -> Dict[str, Any]:
        """Runs constant detector on all module files in parallel to save time."""
        print(f"[Agent JSEnv] Running constant detection on {len(js_files_map)} modules...")
        
        import threading
        lock = threading.Lock()
        processed_count = 0
        total_files = len(js_files_map)
        detector_results = {}
        
        def process_file(item):
            nonlocal processed_count
            mod_id, js_file = item
            with lock:
                processed_count += 1
                curr_count = processed_count
            print(f"[Detector] [{curr_count}/{total_files}] Scanning {mod_id} ({js_file.name})...", flush=True)
            # Avoid path character conflicts by sanitizing slash
            out_json = output_dir / f"{mod_id.replace('/', '_')}.crypto-analysis.json"
            cmd = ["node", str(self.detector_path), str(js_file), str(out_json)]
            try:
                subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
                if out_json.exists():
                    with open(out_json, "r", encoding="utf-8") as f:
                        data = json.load(f)
                        if data.get("success") and data.get("results"):
                            results = data["results"]
                            if results.get("detected_count", 0) > 0:
                                return mod_id, results
            except Exception as e:
                pass
            return mod_id, None

        # Process in parallel
        with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
            futures = {executor.submit(process_file, item): item for item in js_files_map.items()}
            for future in concurrent.futures.as_completed(futures):
                mod_id, result = future.result()
                if result:
                    detector_results[mod_id] = result
                    
        print(f"[Agent JSEnv] Detection complete. Found {len(detector_results)} modules with crypto constants.")
        return detector_results


    def build_dependency_graph(self, js_files_map: Dict[str, Path]):
        """Scans module files to construct dependency and reference graphs."""
        print("[Agent JSEnv] Indexing module dependencies...")
        req_pattern = re.compile(r'require\s*\(\s*["\']\./([^"\']+?)(?:\.js)?["\']\s*\)')
        r_pattern = re.compile(r'\br\((\d+)\)')
        
        for mod_id, js_file in js_files_map.items():
            try:
                content = js_file.read_text(encoding="utf-8")
            except Exception:
                continue
                
            deps = set()
            for m in req_pattern.finditer(content):
                deps.add(m.group(1))
            for m in r_pattern.finditer(content):
                deps.add(m.group(1))
                
            # If the dependencies are numeric Webpack module IDs and we're inside a subdirectory
            # (e.g. mod_id is "app/123"), resolve them relative to the same prefix if possible.
            resolved_deps = []
            prefix = ""
            if "/" in mod_id:
                prefix = mod_id.split("/")[0] + "/"
                
            for d in deps:
                candidate = prefix + d
                if candidate in js_files_map:
                    resolved_deps.append(candidate)
                elif d in js_files_map:
                    resolved_deps.append(d)
                else:
                    resolved_deps.append(d)
                    
            self.dependencies[mod_id] = resolved_deps
            
            # Record sizes and basic metadata
            self.module_metadata[mod_id] = {
                "size_bytes": js_file.stat().st_size,
                "path": str(js_file)
            }
            
            for d in resolved_deps:
                if d not in self.references:
                    self.references[d] = []
                if mod_id not in self.references[d]:
                    self.references[d].append(mod_id)
                    
        print(f"[Agent JSEnv] Graph built. Indexed {len(self.module_metadata)} modules.")

class CryptoAgentOrchestrator:
    """Manages the agent interaction loop and tools execution."""
    
    def __init__(self, bundle_path: Path, folder_path: Path, output_dir: Path, workspace_dir: Path, model: str = "google/gemini-2.5-pro", max_turns: int = 25):
        self.bundle_path = bundle_path
        self.folder_path = folder_path
        self.output_dir = output_dir
        self.workspace_dir = workspace_dir
        self.js_env = JSEnv(workspace_dir)
        self.debundled_dir = output_dir / "debundled"
        self.analysis_dir = output_dir / "analysis"
        self.model = model
        self.max_turns = max_turns
        
        self.seed_modules = {}
        self.final_report = ""
        self.stats_tracker = {
            "total_prompt_tokens": 0,
            "total_completion_tokens": 0,
            "total_tokens": 0,
            "submitted_code_slices": [],
            "turns": [],
            "timing": {
                "debundle_seconds": 0.0,
                "constant_detection_seconds": 0.0,
                "dependency_graph_seconds": 0.0,
                "agent_loop_seconds": 0.0,
                "total_seconds": 0.0
            }
        }

    def is_likely_bundle(self, file_path: Path) -> bool:
        if file_path.stat().st_size < 5000:
            return False
        try:
            content = file_path.read_text(encoding="utf-8", errors="ignore")
            # Common Webpack, Parcel, UMD, and general browserify/rollup bundle patterns
            patterns = [
                r'webpackJsonp',
                r'webpackChunk',
                r'__webpack_require__',
                r'parcelRequire',
                r'var\s+\w+\s*=\s*function\s*\(\s*e\s*\)\s*\{\s*var\s+t\s*=\s*\{\};',
                r'!\s*function\s*\(\s*e\s*\)\s*\{\s*var\s+t\s*=\s*\{\};',
                r'define\s*\(\s*["\']',
            ]
            for pattern in patterns:
                if re.search(pattern, content):
                    return True
        except Exception:
            pass
        return False
        
    def prepare(self) -> bool:
        """Prepares the environment (debundling & initial detection)."""
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.debundled_dir.mkdir(parents=True, exist_ok=True)
        self.analysis_dir.mkdir(parents=True, exist_ok=True)
        
        js_files_map = {}
        t0 = time.time()
        
        if self.bundle_path:
            # Mode A: Webpack Bundle Mode (original logic)
            debundle_ok = self.js_env.debundle(self.bundle_path, self.debundled_dir)
            self.stats_tracker["timing"]["debundle_seconds"] = time.time() - t0
            if not debundle_ok:
                return False
                
            bundle_files = self.js_env._get_js_files(self.debundled_dir)
            for f in bundle_files:
                js_files_map[f.stem] = f
        else:
            # Mode B: Folder Mode (new logic)
            print(f"[Orchestrator] Scanning folder: {self.folder_path}")
            # Recursively locate all JS files
            raw_js_files = list(self.folder_path.glob("**/*.js"))
            
            # Avoid picking up any files from the debundled output subdirectory if it lives inside the scan path
            raw_js_files = [f for f in raw_js_files if "debundled" not in f.parts and "analysis" not in f.parts]
            
            # For each file, check if it looks like a bundle. If so, debundle it.
            for f in raw_js_files:
                rel_path = f.relative_to(self.folder_path).as_posix()
                if self.is_likely_bundle(f):
                    debundle_out = self.debundled_dir / f.stem
                    print(f"[Orchestrator] File {rel_path} is likely a bundle. Unpacking to {debundle_out}...")
                    debundle_ok = self.js_env.debundle(f, debundle_out)
                    if debundle_ok:
                        extracted_files = self.js_env._get_js_files(debundle_out)
                        for ef in extracted_files:
                            # Prefix module ID with the bundle filename stem to keep IDs distinct
                            mod_key = f"{f.stem}/{ef.stem}"
                            js_files_map[mod_key] = ef
                        continue # Exclude the original bundle file from scanning
                
                # Standalone file
                js_files_map[rel_path] = f
                
            self.stats_tracker["timing"]["debundle_seconds"] = time.time() - t0
            
        if not js_files_map:
            print("[Orchestrator] Error: No JavaScript files found or unpacked to analyze.")
            return False
            
        print(f"[Orchestrator] Found/Unpacked {len(js_files_map)} files to scan.")
        
        # 2. Run detector on all modules
        t1 = time.time()
        self.seed_modules = self.js_env.run_detector_parallel(js_files_map, self.analysis_dir)
        self.stats_tracker["timing"]["constant_detection_seconds"] = time.time() - t1
        
        # 3. Build Dependency Graph
        t2 = time.time()
        self.js_env.build_dependency_graph(js_files_map)
        self.stats_tracker["timing"]["dependency_graph_seconds"] = time.time() - t2
        return True

    def execute_tool(self, action: Dict[str, Any]) -> str:
        """Executes a tool call requested by the model and returns string observation."""
        tool = action.get("tool")
        if not tool:
            return "Error: Missing 'tool' parameter in Action."
            
        if tool == "get_module_info":
            mod_id = str(action.get("module_id", "")).strip()
            if mod_id not in self.js_env.module_metadata:
                return f"Error: Module {mod_id} not found."
            
            meta = self.js_env.module_metadata[mod_id]
            deps = self.js_env.dependencies.get(mod_id, [])
            refs = self.js_env.references.get(mod_id, [])
            detected = self.seed_modules.get(mod_id, None)
            
            info = {
                "module_id": mod_id,
                "size_bytes": meta["size_bytes"],
                "requires": deps,
                "referenced_by": refs,
                "detected_crypto": detected
            }
            return json.dumps(info, indent=2)
            
        elif tool == "read_module_code":
            mod_id = str(action.get("module_id", "")).strip()
            if mod_id not in self.js_env.module_metadata:
                return f"Error: Module {mod_id} not found."
                
            file_path = Path(self.js_env.module_metadata[mod_id]["path"])
            start_line = int(action.get("start_line", 1))
            end_line = int(action.get("end_line", 100))
            
            try:
                lines = file_path.read_text(encoding="utf-8").splitlines()
                total_lines = len(lines)
                
                # Boundaries checking
                start_idx = max(0, start_line - 1)
                end_idx = min(total_lines, end_line)
                
                slice_lines = lines[start_idx:end_idx]
                code_content = "\n".join(slice_lines)
                
                # Track submitted slice
                self.stats_tracker["submitted_code_slices"].append({
                    "module_id": mod_id,
                    "start_line": start_line,
                    "end_line": end_idx,
                    "char_count": len(code_content),
                    "line_count": len(slice_lines),
                    "code_snippet": code_content
                })
                
                code_with_numbers = []
                for idx, line in enumerate(slice_lines):
                    code_with_numbers.append(f"{start_line + idx}: {line}")
                    
                header = f"// --- Module {mod_id} ({start_line}-{end_idx} of {total_lines} lines) ---\n"
                return header + "\n".join(code_with_numbers)
            except Exception as e:
                return f"Error reading code for module {mod_id}: {str(e)}"
                
        elif tool == "search_code":
            query = action.get("query", "")
            if not query:
                return "Error: Empty search query."
                
            matches = []
            max_matches = 20
            
            try:
                # Iterate and search
                for mod_id, meta in self.js_env.module_metadata.items():
                    file_path = Path(meta["path"])
                    content = file_path.read_text(encoding="utf-8")
                    if query in content:
                        lines = content.splitlines()
                        for idx, line in enumerate(lines):
                            if query in line:
                                matches.append({
                                    "module_id": mod_id,
                                    "line_number": idx + 1,
                                    "line_content": line.strip()[:150] # Truncate long lines
                                })
                                if len(matches) >= max_matches:
                                    break
                    if len(matches) >= max_matches:
                        break
                        
                if not matches:
                    return f"No matches found for query: '{query}'"
                
                res_str = json.dumps({"matches": matches, "truncated": len(matches) >= max_matches}, indent=2)
                
                # Track submitted search matches as code slices
                self.stats_tracker["submitted_code_slices"].append({
                    "search_query": query,
                    "match_count": len(matches),
                    "char_count": len(res_str),
                    "code_snippet": res_str
                })
                
                return res_str
            except Exception as e:
                return f"Error searching code: {str(e)}"
                
        elif tool == "finish_analysis":
            self.final_report = action.get("report_markdown", "")
            return "SUCCESS"
            
        else:
            return f"Error: Unknown tool '{tool}'."

    def run_agent_loop(self):
        """Starts the ReAct loop with OpenRouter."""
        print("[Agent Loop] Initializing conversation with OpenRouter...")
        t_start = time.time()
        
        # Prepare seeds summary
        seeds_summary = []
        for mod_id, results in self.seed_modules.items():
            algorithms = results.get("algorithms", [])
            summary = results.get("summary", "")
            seeds_summary.append(f"  - Module {mod_id}: Algorithms: {algorithms} ({summary})")
        seeds_str = "\n".join(seeds_summary) if seeds_summary else "  - None"
        
        system_prompt = """You are a highly skilled cryptographic and security analysis code agent.
Your objective is to analyze JavaScript code files to determine:
1. What cryptographic algorithms are implemented (e.g. AES, DES, MD5, SHA-1, SHA-256, RSA).
2. How the APIs are exported, required, or wrapped.
3. How they are actually used (key derivation, key sizes, cipher modes like CBC/ECB, hardcoded keys or IVs, padding).
4. Any potential cryptographic misuse or vulnerabilities.

CRITICAL REQUIREMENT: To save token and cost, DO NOT attempt to read all code. You must explore selectively using the provided tools.

You will think step-by-step using a ReAct reasoning loop. In each turn, you can output one or more Actions if you want to run multiple tool calls in parallel to inspect the codebase faster.
Thought: <your reasoning about what module, reference, or code slice to look at next>
Action: { "tool": "tool_name", "param1": "value1", ... }
Action: { "tool": "tool_name", "param2": "value2", ... }

Each Action block must be a valid JSON object. 

Available tools:
1. `get_module_info`: Find details of a module.
   Action format: { "tool": "get_module_info", "module_id": "inline_0.js" }
2. `read_module_code`: Read a specific line range from a module file.
   Action format: { "tool": "read_module_code", "module_id": "inline_0.js", "start_line": 1, "end_line": 80 }
3. `search_code`: Search for a query/pattern string across all module files.
   Action format: { "tool": "search_code", "query": "AES" }
4. `finish_analysis`: Call this when you have gathered all necessary information and are ready to present the final analysis report.
   Action format: { "tool": "finish_analysis", "report_markdown": "# Crypto Analysis Report\\n\\n...detailed findings..." }

When tracing, start by reading seed modules, see who requires/references them using get_module_info, and read referencing modules' code.
"""

        target_name = self.bundle_path.name if self.bundle_path else self.folder_path.name
        source_type = "bundle" if self.bundle_path else "folder"
        
        user_init_msg = f"""We have indexed the {source_type} '{target_name}' containing {len(self.js_env.module_metadata)} script modules.

Static SAST analysis found cryptographic constants in the following seed modules:
{seeds_str}

Please start your code exploration to find how they are exported and used."""

        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_init_msg}
        ]
        
        max_turns = self.max_turns
        for turn in range(1, max_turns + 1):
            print(f"\n--- [Agent Loop] Turn {turn}/{max_turns} ---")
            
            # Query LLM
            res = get_completion(messages, model=self.model, temperature=0.1)
            if not res["success"]:
                print(f"❌ OpenRouter API call failed: {res.get('error')}")
                break
                
            response_text = res["text"]
            if response_text is None:
                response_text = ""
            print(f"\n[Model Response]:\n{response_text}")
            
            # Extract and update token stats
            usage = res.get("raw", {}).get("usage", {})
            prompt_tokens = usage.get("prompt_tokens", 0)
            completion_tokens = usage.get("completion_tokens", 0)
            total_tokens = usage.get("total_tokens", 0)
            
            self.stats_tracker["total_prompt_tokens"] += prompt_tokens
            self.stats_tracker["total_completion_tokens"] += completion_tokens
            self.stats_tracker["total_tokens"] += total_tokens
            
            # Record detailed turn info
            self.stats_tracker["turns"].append({
                "turn": turn,
                "prompt_tokens": prompt_tokens,
                "completion_tokens": completion_tokens,
                "total_tokens": total_tokens
            })
            
            # Save assistant response to conversation history
            messages.append({"role": "assistant", "content": response_text})
            
            # Parse Thought & Action
            action_blocks = extract_all_json_blocks(response_text)
                
            if not action_blocks:
                obs = "Error: No Action found in your response. Please output one or more Action JSON blocks."
                print(f"[Agent Loop] {obs}")
                messages.append({"role": "user", "content": obs})
                continue
            
            valid_actions = []
            parse_errors = []
            for action_str in action_blocks:
                try:
                    action = json.loads(action_str, strict=False)
                    if not isinstance(action, dict) or "tool" not in action:
                        raise KeyError("Missing 'tool' key in Action dictionary")
                    valid_actions.append(action)
                except Exception as e:
                    parse_errors.append(f"Block: {action_str} - Error: {str(e)}")
            
            if not valid_actions:
                obs = f"Error: None of the Action blocks were valid. Details:\n" + "\n".join(parse_errors)
                print(f"[Agent Loop] {obs}")
                messages.append({"role": "user", "content": obs})
                continue
                
            observations = []
            finish_requested = False
            for idx, action in enumerate(valid_actions, 1):
                print(f"[Agent Loop] Executing Action {idx}/{len(valid_actions)}: {action['tool']} with arguments { {k:v for k,v in action.items() if k != 'tool' and k != 'report_markdown'} }")
                obs = self.execute_tool(action)
                if obs == "SUCCESS":
                    finish_requested = True
                    observations.append(f"Action {idx} ({action['tool']}): Success")
                else:
                    observations.append(f"Action {idx} ({action['tool']}) Observation:\n{obs}")
                    
            combined_observation = "\n\n".join(observations)
            if finish_requested:
                print("\n✅ Agent finished analysis successfully!")
                break
                
            # Log observation size for debugging
            obs_preview = combined_observation[:200] + "..." if len(combined_observation) > 200 else combined_observation
            print(f"[Agent Loop] Combined Observation: {obs_preview}")
            
            messages.append({"role": "user", "content": f"Observation:\n{combined_observation}"})
            
        # Record loop duration and calculate total time
        self.stats_tracker["timing"]["agent_loop_seconds"] = time.time() - t_start
        self.stats_tracker["timing"]["total_seconds"] = (
            self.stats_tracker["timing"]["debundle_seconds"] +
            self.stats_tracker["timing"]["constant_detection_seconds"] +
            self.stats_tracker["timing"]["dependency_graph_seconds"] +
            self.stats_tracker["timing"]["agent_loop_seconds"]
        )

        # Write report to disk
        if self.final_report:
            report_path = self.output_dir / "crypto_report.md"
            report_path.write_text(self.final_report, encoding="utf-8")
            print(f"\n📝 Report saved successfully to: {report_path}")
            
            # Compute token and code stats
            total_submitted_chars = sum(s.get("char_count", 0) for s in self.stats_tracker["submitted_code_slices"])
            total_submitted_lines = sum(s.get("line_count", 0) for s in self.stats_tracker["submitted_code_slices"] if "line_count" in s)
            
            if self.bundle_path:
                orig_size = self.bundle_path.stat().st_size
                target_name = self.bundle_path.name
                label = "Bundle"
            else:
                orig_size = sum(meta.get("size_bytes", 0) for meta in self.js_env.module_metadata.values())
                target_name = self.folder_path.name
                label = "Folder"
            
            self.stats_tracker["summary"] = {
                "bundle_name": target_name,
                "bundle_size_bytes": orig_size,
                "total_turns": len(self.stats_tracker["turns"]),
                "total_prompt_tokens": self.stats_tracker["total_prompt_tokens"],
                "total_completion_tokens": self.stats_tracker["total_completion_tokens"],
                "total_tokens": self.stats_tracker["total_tokens"],
                "total_submitted_characters": total_submitted_chars,
                "total_submitted_lines": total_submitted_lines,
                "token_savings_comparison": {
                    "method_sast_agent": {
                        "description": "Targeted slice exploration with SAST-agent",
                        "estimated_tokens": self.stats_tracker["total_tokens"],
                    },
                    "method_naive_full_code": {
                        "description": "Sending entire code + custom instructions directly to LLM per analysis (estimated)",
                        "estimated_tokens": int(orig_size / 4) + 2000
                    }
                }
            }
            
            # Save stats to output folder
            log_path = self.output_dir / "token_and_code_log.json"
            log_path.write_text(json.dumps(self.stats_tracker, indent=2), encoding="utf-8")
            print(f"📊 Detailed token and code tracking log saved to: {log_path}")
            
            # Print a neat comparison summary
            print("\n================== Token and Code Savings Summary ==================")
            print(f"Target {label}: {target_name} ({orig_size / 1024:.2f} KB)")
            print(f"Total Agent Turns: {len(self.stats_tracker['turns'])}")
            print(f"Total Prompt Tokens Used: {self.stats_tracker['total_prompt_tokens']}")
            print(f"Total Completion Tokens Used: {self.stats_tracker['total_completion_tokens']}")
            print(f"Total Tokens Used: {self.stats_tracker['total_tokens']}")
            print(f"Total JS Code Submitted to LLM: {total_submitted_lines} lines ({total_submitted_chars} chars)")
            print(f"Estimated Naive Full Code Submission Cost: ~{self.stats_tracker['summary']['token_savings_comparison']['method_naive_full_code']['estimated_tokens']} tokens")
            reduction = (1 - (self.stats_tracker["total_tokens"] / self.stats_tracker['summary']['token_savings_comparison']['method_naive_full_code']['estimated_tokens'])) * 100
            print(f"Token Reduction: {reduction:.2f}% (Significant savings!)")
            print("====================================================================")
            
            # Print a neat time distribution breakdown
            print("\n======================= Time Distribution ==========================")
            print(f"Debundling/Scanning: {self.stats_tracker['timing'].get('debundle_seconds', 0):.2f}s")
            print(f"Constant Detection:  {self.stats_tracker['timing'].get('constant_detection_seconds', 0):.2f}s")
            print(f"Graph Indexing:      {self.stats_tracker['timing'].get('dependency_graph_seconds', 0):.2f}s")
            print(f"Agent LLM Loop:      {self.stats_tracker['timing']['agent_loop_seconds']:.2f}s")
            print(f"Total Time:          {self.stats_tracker['timing']['total_seconds']:.2f}s")
            print("====================================================================")
            
            return True
        else:
            print("❌ Failed to obtain final analysis report.")
            return False

def main():
    parser = argparse.ArgumentParser(description="Targeted JS Bundle Cryptographic Analysis Code Agent")
    parser.add_argument("--bundle", default=None, help="Path to the webpack bundle file")
    parser.add_argument("--folder", default=None, help="Path to a directory containing multiple JS files")
    parser.add_argument("--output", default=None, help="Output directory for results (defaults to output/agent_analysis_<name_stem>)")
    parser.add_argument("--model", default="google/gemini-2.5-pro", help="OpenRouter model ID to use for the agent")
    parser.add_argument("--max-turns", type=int, default=25, help="Maximum number of turns for the ReAct loop")
    args = parser.parse_args()
    
    if not args.bundle and not args.folder:
        parser.error("At least one of --bundle or --folder must be specified.")
    if args.bundle and args.folder:
        parser.error("Cannot specify both --bundle and --folder at the same time.")
        
    workspace_dir = Path(__file__).resolve().parent.parent.parent
    
    bundle_path = Path(args.bundle) if args.bundle else None
    folder_path = Path(args.folder) if args.folder else None
    
    target_path = bundle_path if bundle_path else folder_path
    if not target_path.exists():
        print(f"Error: Target path not found: {target_path}")
        sys.exit(1)
        
    if args.output:
        output_dir = Path(args.output)
    else:
        # Defaults to output/agent_analysis_<target_stem>
        output_dir = workspace_dir / "output" / f"agent_analysis_{target_path.stem}"
        
    orchestrator = CryptoAgentOrchestrator(
        bundle_path=bundle_path,
        folder_path=folder_path,
        output_dir=output_dir,
        workspace_dir=workspace_dir,
        model=args.model,
        max_turns=args.max_turns
    )
    
    print("🚀 Preparing environment (scanning/debundling & initial detection)...")
    if not orchestrator.prepare():
        print("❌ Preparation failed.")
        sys.exit(1)
        
    print("\n🕵️ Starting Agent loop...")
    if orchestrator.run_agent_loop():
        print("\n🎉 Cryptographic analysis completed successfully!")
    else:
        print("\n❌ Cryptographic analysis failed.")
        sys.exit(1)

if __name__ == "__main__":
    main()

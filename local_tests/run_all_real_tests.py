#!/usr/bin/env python3
import os
import sys
import subprocess
from pathlib import Path

def main():
    workspace_dir = Path(__file__).resolve().parent.parent
    real_tests_dir = workspace_dir / "local_tests" / "real-tests"
    
    if not real_tests_dir.exists():
        print(f"Error: Directory not found: {real_tests_dir}")
        sys.exit(1)
        
    js_files = sorted(list(real_tests_dir.glob("*.js")))
    if not js_files:
        print("No JavaScript test files found.")
        sys.exit(0)
        
    print(f"Found {len(js_files)} test files to process:")
    for f in js_files:
        print(f"  - {f.name} ({f.stat().st_size / 1024:.2f} KB)")
        
    for idx, f in enumerate(js_files, 1):
        print(f"\n====================================================================")
        print(f"[{idx}/{len(js_files)}] Processing: {f.name}")
        print(f"====================================================================")
        
        cmd = ["python", "src/agent/crypto_agent.py", "--bundle", str(f)]
        try:
            # Run the command and print output line-by-line
            process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, cwd=str(workspace_dir))
            
            while True:
                output = process.stdout.readline()
                if output == '' and process.poll() is not None:
                    break
                if output:
                    print(output.strip())
                    
            rc = process.poll()
            if rc == 0:
                print(f"✅ Successfully processed {f.name}")
            else:
                print(f"❌ Failed processing {f.name} (exit code: {rc})")
        except Exception as e:
            print(f"❌ Error executing agent on {f.name}: {e}")
            
    print("\n====================================================================")
    print("All test runs completed!")
    print("====================================================================")

if __name__ == "__main__":
    main()

import os
import glob
import subprocess
import json

# Configuration - modify these paths as needed
SLICE_TOOL_PATH = './slice_tool_cli.js'
RESULTS_DIR = '/home/viewv/misuse-detector/jsmisuse/crypto_analysis_results'
PROGRESS_FILE = os.path.join('analysis_progress.json')

def collect_json_files(directory):
    """Collect all JSON file paths in the specified directory."""
    return glob.glob(os.path.join(directory, '*.json'))

def analyze_file(file_path):
    """Run the slice_tool_cli.js script on a single file."""
    try:
        subprocess.run(["node", SLICE_TOOL_PATH, file_path],capture_output=True, text=True)
    except Exception as e:
        print(f"Exception while analyzing {file_path}: {e}")
        return None

def main():
    """Main function"""
    code_files = collect_json_files(RESULTS_DIR)
    if not code_files:
        print("No JSON files found in the specified directory.")
        return
    print(f"Found {len(code_files)} JSON files to analyze.")
    progress = {}
    for i, file_path in enumerate(code_files):
        print(f"Analyzing file {i + 1}/{len(code_files)}: {file_path}")
        result = analyze_file(file_path)
        if result:
            progress[file_path] = result
        else:
            progress[file_path] = None
        # Save progress after each file
        with open(PROGRESS_FILE, 'w') as f:
            json.dump(progress, f, indent=4)

if __name__ == '__main__':
    exit(main())

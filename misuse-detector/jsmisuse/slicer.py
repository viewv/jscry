import os
import glob
import subprocess
import json
from multiprocessing import Pool, cpu_count
from functools import partial
import time

# Configuration - modify these paths as needed
SLICE_TOOL_PATH = './slice_tool_cli.js'
RESULTS_DIR = '/home/viewv/misuse-detector/jsmisuse/crypto_analysis_results'
PROGRESS_FILE = os.path.join('analysis_progress.json')
BATCH_SIZE = 10  # Number of files to process in parallel

def collect_json_files(directory):
    """Collect all JSON file paths in the specified directory."""
    return glob.glob(os.path.join(directory, '*.json'))

def analyze_file(file_path):
    """Run the slice_tool_cli.js script on a single file."""
    try:
        result = subprocess.run(
            ["node", SLICE_TOOL_PATH, file_path],
            capture_output=True, 
            text=True,
            timeout=300  # 5 minute timeout per file
        )
        return {
            'file': file_path,
            'success': result.returncode == 0,
            'stdout': result.stdout,
            'stderr': result.stderr,
            'returncode': result.returncode
        }
    except subprocess.TimeoutExpired:
        print(f"Timeout while analyzing {file_path}")
        return {
            'file': file_path,
            'success': False,
            'error': 'Timeout',
            'stdout': '',
            'stderr': 'Process timed out after 5 minutes'
        }
    except Exception as e:
        print(f"Exception while analyzing {file_path}: {e}")
        return {
            'file': file_path,
            'success': False,
            'error': str(e),
            'stdout': '',
            'stderr': str(e)
        }

def process_batch(file_batch, batch_num, total_batches):
    """Process a batch of files in parallel."""
    print(f"Processing batch {batch_num}/{total_batches} with {len(file_batch)} files")
    
    # Use min of batch size and available CPU cores
    num_processes = min(len(file_batch), cpu_count())
    
    with Pool(processes=num_processes) as pool:
        results = pool.map(analyze_file, file_batch)
    
    return results

def load_existing_progress():
    """Load existing progress if available."""
    if os.path.exists(PROGRESS_FILE):
        try:
            with open(PROGRESS_FILE, 'r') as f:
                return json.load(f)
        except (json.JSONDecodeError, IOError):
            print("Warning: Could not load existing progress file")
    return {}

def save_progress(progress):
    """Save progress to file."""
    try:
        with open(PROGRESS_FILE, 'w') as f:
            json.dump(progress, f, indent=4)
    except IOError as e:
        print(f"Warning: Could not save progress: {e}")

def create_batches(file_list, batch_size):
    """Split file list into batches."""
    for i in range(0, len(file_list), batch_size):
        yield file_list[i:i + batch_size]

def main():
    """Main function"""
    code_files = collect_json_files(RESULTS_DIR)
    if not code_files:
        print("No JSON files found in the specified directory.")
        return
    
    print(f"Found {len(code_files)} JSON files to analyze.")
    
    # Load existing progress
    progress = load_existing_progress()
    
    # Filter out already processed files if needed
    # Uncomment the next two lines if you want to skip already processed files
    # remaining_files = [f for f in code_files if f not in progress]
    # print(f"Skipping {len(code_files) - len(remaining_files)} already processed files")
    
    remaining_files = code_files  # Process all files
    
    # Create batches
    batches = list(create_batches(remaining_files, BATCH_SIZE))
    total_batches = len(batches)
    
    print(f"Processing {len(remaining_files)} files in {total_batches} batches of up to {BATCH_SIZE} files each")
    print(f"Using up to {min(BATCH_SIZE, cpu_count())} parallel processes per batch")
    
    start_time = time.time()
    
    for batch_num, file_batch in enumerate(batches, 1):
        batch_start_time = time.time()
        
        # Process the batch
        batch_results = process_batch(file_batch, batch_num, total_batches)
        
        # Update progress with batch results
        for result in batch_results:
            progress[result['file']] = result
        
        # Save progress after each batch
        save_progress(progress)
        
        batch_time = time.time() - batch_start_time
        elapsed_time = time.time() - start_time
        
        print(f"Batch {batch_num} completed in {batch_time:.2f}s")
        print(f"Total elapsed time: {elapsed_time:.2f}s")
        
        # Print batch summary
        successful = sum(1 for r in batch_results if r['success'])
        failed = len(batch_results) - successful
        print(f"Batch {batch_num} summary: {successful} successful, {failed} failed")
        print("-" * 50)
    
    # Final summary
    total_time = time.time() - start_time
    total_successful = sum(1 for r in progress.values() if r and r.get('success', False))
    total_failed = len(progress) - total_successful
    
    print(f"\nAnalysis completed in {total_time:.2f}s")
    print(f"Total summary: {total_successful} successful, {total_failed} failed")
    print(f"Results saved to: {PROGRESS_FILE}")

if __name__ == '__main__':
    exit(main())
import json
import os
import shutil

# Example of the JSON structure:
# {
#   "domain": "1capp_com",
#   "fileName": "https___1capp_com_inline_1.js",
#   "filePath": "../output/1capp_com/https___1capp_com_inline_1.js",
#   "taskId": "1capp_com_https___1capp_com_inline_1",
#   "timestamp": "2025-07-09T15:33:30.684Z",
#   "workerId": "worker-2",
#   "success": true,
#   "exitCode": 0,
#   "analysisMethod": "dynamic",
#   "results": {
#     "detected_count": 0,
#     "algorithms": [],
#     "confidence_scores": {},
#     "detailed_results": {},
#     "summary": "No cryptographic constants detected"
#   }
# }

def clean_crypto_analysis_results(directory):
    # clean the result that don't have any crypto algorithm
    files_has_crypto = 0
    files_no_crypto = 0
    for filename in os.listdir(directory):
        with open(os.path.join(directory, filename), 'r') as f:
            try:
                data = json.load(f)
                if data['results']['detected_count'] == 0:
                    print(f"Removing {filename} as it has no crypto algorithms detected.")
                    os.remove(os.path.join(directory, filename))
                    files_no_crypto += 1
                else:
                    print(f"Keeping {filename} as it has crypto algorithms detected.")
                    files_has_crypto += 1
            except json.JSONDecodeError as e:
                print(f"Error decoding JSON from {filename}: {e}")
                continue
    print(f"Total files with crypto algorithms: {files_has_crypto}")
    print(f"Total files without crypto algorithms removed: {files_no_crypto}")
    
if __name__ == "__main__":
    output_directory = './crypto_analysis_results'
    if os.path.exists(output_directory):
        clean_crypto_analysis_results(output_directory)
    else:
        print(f"Directory {output_directory} does not exist.")
    
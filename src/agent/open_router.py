import os
import re
import random
import requests
import argparse
import traceback
import time
# Unused imports removed to avoid pandas/numpy conflicts

BASE_URL = "https://openrouter.ai/api/v1/chat/completions"
API_KEY = ""

def get_completion(messages, model="google/gemini-2.5-pro", temperature=0.1, response_format=None, max_retries=3):
    """
    Get chat completions from OpenRouter with retry logic.
    
    Args:
        messages (list): List of message dicts (role, content).
        model (str): OpenRouter model name.
        temperature (float): Sampling temperature.
        response_format (dict): Format constraints (e.g., {"type": "json_object"}).
        max_retries (int): Maximum number of retry attempts for network/API errors.
        
    Returns:
        dict: Completion result with success status, text, or error message.
    """
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/jsmisuse/jsmisuse",
        "X-Title": "JS Misuse Detector Code Explorer"
    }

    payload = {
        "model": model,
        "messages": messages,
        "temperature": temperature
    }

    if response_format:
        payload["response_format"] = response_format

    for attempt in range(max_retries):
        try:
            response = requests.post(BASE_URL, headers=headers, json=payload, timeout=90)
            if response.status_code == 200:
                result = response.json()
                if "choices" in result and len(result["choices"]) > 0:
                    content = result["choices"][0]["message"].get("content")
                    return {
                        "success": True,
                        "text": content if content is not None else "",
                        "raw": result
                    }
                else:
                    return {
                        "success": False,
                        "error": "Empty choices in response",
                        "raw": result
                    }
            elif response.status_code == 429:
                wait_time = 2 ** attempt + random.random()
                print(f"[OpenRouter] Rate limited (429). Retrying in {wait_time:.2f}s...")
                time.sleep(wait_time)
            else:
                print(f"[OpenRouter] API error: {response.status_code} - {response.text}")
                if attempt < max_retries - 1:
                    wait_time = 2 ** attempt
                    time.sleep(wait_time)
        except Exception as e:
            print(f"[OpenRouter] Request exception: {str(e)}")
            if attempt < max_retries - 1:
                wait_time = 2 ** attempt
                time.sleep(wait_time)

    return {
        "success": False,
        "error": f"Failed after {max_retries} attempts"
    }

if __name__ == "__main__":
    # Small test script
    print("Testing OpenRouter API connection...")
    test_messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello! Reply with exactly the word 'SUCCESS' if you read this."}
    ]
    res = get_completion(test_messages)
    if res["success"]:
        print(f"✅ Connection successful: {res['text'].strip()}")
    else:
        print(f"❌ Connection failed: {res['error']}")

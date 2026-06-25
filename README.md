# jsmisuse

## Getting started

npm install

## Crawler

node generate_sites.js 1000

node crawler.js random-1000-sites.csv ./output 50 2 8

Crawl all generated random selected sites in 8 parallel jobs:

## test crypto detection

You can use the real case test

```bash
node crypto-cli-tool.js /Users/viewv/jscry/local_tests/real-tests/script_6e637aad.js
```

Should detect algorithms: AES, SHA-1, MD5, SHA-256

## Crypto usage analyze

Put your openrouter API key in `src/agent/open_router.py` file, then run the following command to analyze all crawled domains:

To run the cryptographic agent analysis on all crawled domains in parallel (e.g., with 4 parallel jobs):

```bash
python batch_agent_analysis.py --concurrency 4 --model anthropic/claude-opus-4.8-fast --max-turns 25


Notes:
* By default, omitting `--count` will automatically select and analyze **all** available crawled domains (in sorted alphabetical order). If you want to analyze a subset, you can specify `--count <N>`.
* `--concurrency 4` enables running 4 analysis jobs in parallel.
* The script will update a console progress bar in real-time and print buffered execution results as each job completes.

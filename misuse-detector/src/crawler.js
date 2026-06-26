const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');
const URL = require('url').URL;

class WebCrawler {
  constructor(options = {}) {
    this.options = {
      maxDepth: options.maxDepth || 3,
      maxPages: options.maxPages || 100,
      outputDir: options.outputDir || path.join(process.cwd(), 'output'),
      timeout: options.timeout || 30000,
      ...options
    };
    
    this.visited = new Set();
    this.queue = [];
    this.scriptContents = new Map();
    this.pageCount = 0;
  }

  async initialize() {
    // Create output directory if it doesn't exist
    await fs.mkdir(this.options.outputDir, { recursive: true });
    
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  normalizeUrl(url, baseUrl) {
    try {
      const parsedUrl = new URL(url, baseUrl);
      return parsedUrl.href;
    } catch (e) {
      return null;
    }
  }

  isSameDomain(url1, url2) {
    try {
      const domain1 = new URL(url1).hostname;
      const domain2 = new URL(url2).hostname;
      return domain1 === domain2;
    } catch (e) {
      return false;
    }
  }

  async extractScripts(page, url) {
    // Extract inline scripts
    const inlineScripts = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('script:not([src])')).map(script => script.innerHTML);
    });

    // Extract external script URLs
    const scriptUrls = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('script[src]')).map(script => script.src);
    });

    // Save inline scripts
    for (let i = 0; i < inlineScripts.length; i++) {
      const script = inlineScripts[i];
      if (script.trim()) {
        const scriptId = `${url.replace(/[^a-z0-9]/gi, '_')}_inline_${i}.js`;
        this.scriptContents.set(scriptId, script);
        await fs.writeFile(path.join(this.options.outputDir, scriptId), script);
      }
    }

    // Fetch and save external scripts
    for (const scriptUrl of scriptUrls) {
      try {
        const normalizedUrl = this.normalizeUrl(scriptUrl, url);
        if (!normalizedUrl) continue;

        const scriptId = normalizedUrl.replace(/[^a-z0-9]/gi, '_') + '.js';
        
        // Skip if we've already downloaded this script
        if (this.scriptContents.has(scriptId)) continue;

        const scriptPage = await this.browser.newPage();
        const response = await scriptPage.goto(normalizedUrl, { 
          timeout: this.options.timeout,
          waitUntil: 'networkidle2'
        });
        
        if (response && response.ok()) {
          const content = await response.text();
          this.scriptContents.set(scriptId, content);
          await fs.writeFile(path.join(this.options.outputDir, scriptId), content);
        }
        
        await scriptPage.close();
      } catch (error) {
        console.error(`Error fetching script ${scriptUrl}: ${error.message}`);
      }
    }
  }

  async extractLinks(page, baseUrl) {
    return await page.evaluate((baseUrl) => {
      const links = Array.from(document.querySelectorAll('a[href]')).map(a => a.href);
      return links.filter(link => link && !link.startsWith('javascript:') && !link.startsWith('#'));
    }, baseUrl);
  }

  // Add a reset method to the WebCrawler class
  async reset() {
    // Reset all state
    this.visited = new Set();
    this.queue = [];
    this.scriptContents = new Map();
    this.pageCount = 0;
    
    // If browser instance exists, close it and recreate
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
  
  // Modify the crawl method to ensure state is reset before each call
  async crawl(startUrl, depth = 0) {
    if (!this.isValidUrl(startUrl)) {
      console.error(`Invalid URL: ${startUrl}`);
      return;
    }
  
    // Reset state
    await this.reset();
  
    // Initialize browser
    if (!this.browser) {
      await this.initialize();
    }
  
    this.queue.push({ url: startUrl, depth });
    
    while (this.queue.length > 0 && this.pageCount < this.options.maxPages) {
      const { url, depth } = this.queue.shift();
      
      // Skip if already visited or exceeds max depth
      if (this.visited.has(url) || depth > this.options.maxDepth) {
        continue;
      }
      
      this.visited.add(url);
      this.pageCount++;
      
      console.log(`Crawling (${this.pageCount}/${this.options.maxPages}): ${url}`);
      
      try {
        const page = await this.browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
        
        // Set a reasonable timeout
        await page.setDefaultNavigationTimeout(this.options.timeout);
        
        const response = await page.goto(url, { 
          waitUntil: 'networkidle2',
          timeout: this.options.timeout
        });
        
        if (!response || !response.ok()) {
          console.error(`Failed to load ${url}: ${response ? response.status() : 'No response'}`);
          await page.close();
          continue;
        }
        
        // Extract and save scripts
        await this.extractScripts(page, url);
        
        // Extract links for further crawling
        if (depth < this.options.maxDepth) {
          const links = await this.extractLinks(page, url);
          
          for (const link of links) {
            const normalizedLink = this.normalizeUrl(link, url);
            if (normalizedLink && !this.visited.has(normalizedLink) && this.isSameDomain(url, normalizedLink)) {
              this.queue.push({ url: normalizedLink, depth: depth + 1 });
            }
          }
        }
        
        await page.close();
      } catch (error) {
        console.error(`Error crawling ${url}: ${error.message}`);
      }
    }
    
    console.log(`Crawling complete. Visited ${this.visited.size} pages and extracted ${this.scriptContents.size} scripts.`);
    return {
      visitedUrls: Array.from(this.visited),
      extractedScripts: Array.from(this.scriptContents.keys())
    };
  }

  getScriptContents() {
    return this.scriptContents;
  }
}

module.exports = WebCrawler;
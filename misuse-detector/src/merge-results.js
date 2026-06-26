const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');
const fs = require('fs');
const path = require('path');

async function mergeResults(dbFiles, outputDb) {
    // Create output database
    const outputDB = await sqlite.open({
        filename: outputDb,
        driver: sqlite3.Database
    });
    
    // Create table structure
    await outputDB.exec(`
        CREATE TABLE IF NOT EXISTS domain_results (
            domain TEXT PRIMARY KEY,
            rank INTEGER,
            timestamp DATETIME,
            script_count INTEGER,
            has_crypto BOOLEAN,
            algorithms TEXT
        );
    `);
    
    // Merge results from each database
    for (const dbFile of dbFiles) {
        console.log(`Processing database: ${dbFile}`);
        
        const db = await sqlite.open({
            filename: dbFile,
            driver: sqlite3.Database
        });
        
        // Get all results
        const results = await db.all('SELECT * FROM domain_results');
        
        // Insert into output database
        const stmt = await outputDB.prepare(`
            INSERT OR IGNORE INTO domain_results 
            (domain, rank, timestamp, script_count, has_crypto, algorithms)
            VALUES (?, ?, ?, ?, ?, ?)
        `);
        
        for (const result of results) {
            await stmt.run(
                result.domain,
                result.rank,
                result.timestamp,
                result.script_count,
                result.has_crypto,
                result.algorithms
            );
        }
        
        await stmt.finalize();
        await db.close();
    }
    
    // Generate statistics report
    const stats = await outputDB.all(`
        SELECT 
            COUNT(*) as total_domains,
            SUM(CASE WHEN has_crypto = 1 THEN 1 ELSE 0 END) as domains_with_crypto,
            AVG(script_count) as avg_scripts_per_domain
        FROM domain_results
    `);
    
    console.log('Merge completed, statistics results:', stats[0]);
    
    await outputDB.close();
    return stats[0];
}

async function main() {
    // Find all database files
    const dbFiles = fs.readdirSync(process.cwd())
        .filter(file => file.startsWith('crypto_usage_') && file.endsWith('.db'))
        .map(file => path.join(process.cwd(), file));
    
    console.log(`Found ${dbFiles.length} database files`);
    
    if (dbFiles.length === 0) {
        console.log('No database files found');
        return;
    }
    
    // Merge results
    await mergeResults(dbFiles, path.join(process.cwd(), 'crypto_usage_merged.db'));
}

main().catch(console.error);
const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');
const fs = require('fs');
const path = require('path');

async function mergeResults(dbFiles, outputDb) {
    // 创建输出数据库
    const outputDB = await sqlite.open({
        filename: outputDb,
        driver: sqlite3.Database
    });
    
    // 创建表结构
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
    
    // 合并每个数据库的结果
    for (const dbFile of dbFiles) {
        console.log(`处理数据库: ${dbFile}`);
        
        const db = await sqlite.open({
            filename: dbFile,
            driver: sqlite3.Database
        });
        
        // 获取所有结果
        const results = await db.all('SELECT * FROM domain_results');
        
        // 插入到输出数据库
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
    
    // 生成统计报告
    const stats = await outputDB.all(`
        SELECT 
            COUNT(*) as total_domains,
            SUM(CASE WHEN has_crypto = 1 THEN 1 ELSE 0 END) as domains_with_crypto,
            AVG(script_count) as avg_scripts_per_domain
        FROM domain_results
    `);
    
    console.log('合并完成，统计结果:', stats[0]);
    
    await outputDB.close();
    return stats[0];
}

async function main() {
    // 查找所有数据库文件
    const dbFiles = fs.readdirSync(process.cwd())
        .filter(file => file.startsWith('crypto_usage_') && file.endsWith('.db'))
        .map(file => path.join(process.cwd(), file));
    
    console.log(`找到 ${dbFiles.length} 个数据库文件`);
    
    if (dbFiles.length === 0) {
        console.log('没有找到数据库文件');
        return;
    }
    
    // 合并结果
    await mergeResults(dbFiles, path.join(process.cwd(), 'crypto_usage_merged.db'));
}

main().catch(console.error);
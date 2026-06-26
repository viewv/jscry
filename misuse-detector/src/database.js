/**
 * Database Module
 * 
 * Handles SQLite database operations for storing crypto usage data
 */

const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');
const path = require('path');
const fs = require('fs').promises;

class Database {
    constructor(options = {}) {
        this.dbPath = options.dbPath || path.join(process.cwd(), 'crypto_usage.db');
    }

    async initialize() {
        this.db = await sqlite.open({
            filename: this.dbPath,
            driver: sqlite3.Database
        });

        // Create tables with updated schema
        await this.db.exec(`
            CREATE TABLE IF NOT EXISTS domain_results (
                domain TEXT PRIMARY KEY,
                rank INTEGER,
                timestamp DATETIME,
                script_count INTEGER,
                has_crypto BOOLEAN,
                algorithms TEXT
            );
        `);
    }

    async storeDomainResults(result) {
        const stmt = await this.db.prepare(`
            INSERT OR REPLACE INTO domain_results 
            (domain, rank, timestamp, script_count, has_crypto, algorithms)
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        await stmt.run(
            result.domain,
            result.rank,
            result.timestamp.toISOString(),
            result.scriptCount,
            result.hasCrypto ? 1 : 0,
            JSON.stringify(result.algorithms)
        );

        await stmt.finalize();
    }

    async getDomainStats() {
        const stats = await this.db.all(`
            SELECT 
                COUNT(*) as total_domains,
                SUM(CASE WHEN has_crypto = 1 THEN 1 ELSE 0 END) as domains_with_crypto,
                AVG(script_count) as avg_scripts_per_domain
            FROM domain_results
        `);
        return stats[0];
    }

    async getAlgorithmStats() {
        const results = await this.db.all(`
            SELECT algorithms, COUNT(*) as count
            FROM domain_results
            WHERE has_crypto = 1
            GROUP BY algorithms
        `);

        // Parse JSON strings and aggregate algorithm counts
        const algorithmCounts = {};
        results.forEach(row => {
            const algorithms = JSON.parse(row.algorithms);
            algorithms.forEach(algo => {
                algorithmCounts[algo] = (algorithmCounts[algo] || 0) + row.count;
            });
        });

        return algorithmCounts;
    }

    async getMisuseStats() {
        // Since we do not explicitly store misuse information, return an empty object here
        return {
            hardcoded_keys: 0,
            weak_modes: 0,
            weak_hashes: 0,
            missing_iv: 0
        };
    }

    async close() {
        if (this.db) {
            await this.db.close();
        }
    }
}

module.exports = Database;
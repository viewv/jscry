const yargs = require('yargs');
const WebsiteAnalyzer = require('./website-analyzer');
const path = require('path');

const argv = yargs
    .option('file', {
        alias: 'f',
        description: 'Path to CSV file containing top sites',
        type: 'string'
    })
    .option('number', {
        alias: 'n',
        description: 'Number of sites to analyze',
        type: 'number'
    })
    .option('start', {
        alias: 's',
        description: 'Start rank',
        type: 'number',
        default: 1
    })
    .option('end', {
        alias: 'e',
        description: 'End rank',
        type: 'number'
    })
    .option('db', {
        description: 'Database file path',
        type: 'string'
    })
    .argv;

async function main() {
    const dbPath = argv.db ? 
        path.resolve(process.cwd(), argv.db) : 
        path.join(process.cwd(), `crypto_usage_${argv.start}_${argv.end || argv.number}.db`);
    
    console.log(`Using database: ${dbPath}`);
    
    const analyzer = new WebsiteAnalyzer({
        rankingFile: argv.file,
        maxSites: argv.number,
        startRank: argv.start,
        endRank: argv.end || argv.number,
        dbPath: dbPath
    });

    const results = await analyzer.analyzeTopSites();
    console.log('Analysis complete:', results);
}

main().catch(console.error);
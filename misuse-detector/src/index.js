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
        description: '开始的排名',
        type: 'number',
        default: 1
    })
    .option('end', {
        alias: 'e',
        description: '结束的排名',
        type: 'number'
    })
    .option('db', {
        description: '数据库文件路径',
        type: 'string'
    })
    .argv;

async function main() {
    const dbPath = argv.db ? 
        path.resolve(process.cwd(), argv.db) : 
        path.join(process.cwd(), `crypto_usage_${argv.start}_${argv.end || argv.number}.db`);
    
    console.log(`使用数据库: ${dbPath}`);
    
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
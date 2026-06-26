module.exports = {
  apps: [
    // Define multiple instances here, each instance responsible for a different range of websites
    {
      name: "analyzer-1-1000",
      script: "src/index.js",
      args: "--file top-sites.csv --start 1 --end 1000 --db crypto_usage_1_1000.db"
    },
    {
      name: "analyzer-1001-2000",
      script: "src/index.js",
      args: "--file top-sites.csv --start 1001 --end 2000 --db crypto_usage_1001_2000.db"
    },
    {
      name: "analyzer-2001-3000",
      script: "src/index.js",
      args: "--file top-sites.csv --start 2001 --end 3000 --db crypto_usage_2001_3000.db"
    },
    // More instances can be added as needed
  ]
};
module.exports = {
  apps: [
    // 这里定义多个实例，每个实例负责不同范围的网站
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
    // 可以根据需要添加更多实例
  ]
};
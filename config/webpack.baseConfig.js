const { parseConfig } = require('duck-core');

const initConfig = {
    entryScript: '../src/index',
    entryHtml: '../src/index.html',
    output: '../dist',
    port: 8088,
    host: 'localhost',
    isTs: false,
    outPutName: 'index.js',
    dirname: __dirname,
};

// const { devConfig, prodConfig, servConfig } = parseConfig(initConfig);
const p = parseConfig(initConfig);

module.exports = {
    p,
};
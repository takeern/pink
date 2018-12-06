const { parseConfig } = require('duck-core');
const baseConfig = require('./baseConfig.json')

const p = parseConfig(baseConfig);

module.exports = {
    p,
};
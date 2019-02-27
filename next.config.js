const withTypescript = require('@zeit/next-typescript')
const withSourceMaps = require('@zeit/next-source-maps')
require('dotenv').load()

module.exports = withSourceMaps(withTypescript())

const withTypescript = require('@zeit/next-typescript')
const withSourceMaps = require('@zeit/next-source-maps')
const withCSS = require('@zeit/next-css')
require('dotenv').load()

module.exports = withCSS(withSourceMaps(withTypescript()))

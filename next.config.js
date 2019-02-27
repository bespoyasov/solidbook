const withTypescript = require('@zeit/next-typescript')
const withSourceMaps = require('@zeit/next-source-maps')
const path = require('path')
const glob = require('glob')
require('dotenv').load()

module.exports = withSourceMaps(withTypescript())

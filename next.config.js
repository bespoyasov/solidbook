const withTypescript = require('@zeit/next-typescript')
const withSourceMaps = require('@zeit/next-source-maps')
const withMDX = require('@zeit/next-mdx')({ extension: /.mdx?$/ })
require('dotenv').load()

module.exports = withMDX(
  withSourceMaps(
    withTypescript({
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
    })
  )
)

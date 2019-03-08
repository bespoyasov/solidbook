const withTypescript = require('@zeit/next-typescript')
const withSourceMaps = require('@zeit/next-source-maps')

const markdownPluginAbbr = require('remark-abbr')
const markdownPluginSectionize = require('remark-sectionize')

const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
  options: {
    mdPlugins: [markdownPluginAbbr, markdownPluginSectionize]
  }
})
require('dotenv').load()

module.exports = withMDX(
  withSourceMaps(
    withTypescript({
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
    })
  )
)

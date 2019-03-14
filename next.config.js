const withTypescript = require('@zeit/next-typescript')
const withSourceMaps = require('@zeit/next-source-maps')
const withCSS = require('@zeit/next-css')
const markdownPluginAbbr = require('remark-abbr')
const markdownPluginSectionize = require('remark-sectionize')

const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
  options: {
    mdPlugins: [markdownPluginAbbr, markdownPluginSectionize]
  }
})
require('dotenv').load()

module.exports = withCSS(
  withMDX(
    withSourceMaps(
      withTypescript({
        target: 'serverless',
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
      })
    )
  )
)

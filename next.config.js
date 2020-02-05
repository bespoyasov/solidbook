const withSourceMaps = require('@zeit/next-source-maps')
const withCSS = require('@zeit/next-css')

const markdownPluginAbbr = require('remark-abbr')
const markdownPluginSectionize = require('remark-sectionize')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    mdPlugins: [markdownPluginAbbr, markdownPluginSectionize]
  }
})

module.exports = withCSS(
  withMDX({ pageExtensions: ["md", "mdx", "tsx"] })
)

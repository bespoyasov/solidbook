const withSourceMaps = require('@zeit/next-source-maps')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [require('remark-abbr'), require('remark-sectionize')]
  }
})

module.exports = withMDX(withSourceMaps({ pageExtensions: ['md', 'mdx', 'tsx'] }))

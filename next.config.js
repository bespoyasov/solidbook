const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [require('remark-abbr'), require('remark-sectionize')]
  }
})

module.exports = withMDX({
  pageExtensions: ['md', 'mdx', 'tsx'],
  productionBrowserSourceMaps: true
})

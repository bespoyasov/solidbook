const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [require('remark-sectionize')]
  }
})

module.exports = withMDX({
  pageExtensions: ['md', 'mdx', 'tsx'],
  productionBrowserSourceMaps: true
})

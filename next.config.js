const withPWA = require('next-pwa')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [require('remark-sectionize')]
  }
})

module.exports = withMDX(withPWA(
  {
    pageExtensions: ["md", "mdx", "tsx"],
    pwa: {
      dest: 'public',
      modifyURLPrefix: {
        'static/': '_next/static/',
      }
    }
  }
))

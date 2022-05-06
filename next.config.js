const withSourceMaps = require('@zeit/next-source-maps')
const withCSS = require('@zeit/next-css')
const withPWA = require('next-pwa')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [require('remark-abbr'), require('remark-sectionize')]
  }
})

module.exports = withCSS(
  withMDX(
    withSourceMaps(
      withPWA(
        {
          pageExtensions: ["md", "mdx", "tsx"],
          pwa: {
            dest: 'public',
            modifyURLPrefix: {
              'static/': '_next/static/',
            }
          }
        }
      )
    )
  )
)

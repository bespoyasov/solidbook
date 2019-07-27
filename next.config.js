const withTypescript = require('@zeit/next-typescript')
const withSourceMaps = require('@zeit/next-source-maps')
const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')

const markdownPluginAbbr = require('remark-abbr')
const markdownPluginSectionize = require('remark-sectionize')

const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
  options: {
    mdPlugins: [markdownPluginAbbr, markdownPluginSectionize]
  }
})

module.exports = withOffline(
  withCSS(
    withMDX(
      withSourceMaps(
        withTypescript({
          target: 'serverless',
          pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
          workboxOpts: {
              swDest: 'static/service-worker.js',
            }
        })
      )
    )
  )
)

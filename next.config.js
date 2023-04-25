import nextMdx from '@next/mdx'
import sectionize from 'remark-sectionize'

const withMDX = nextMdx({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [sectionize]
  }
})

export default withMDX({
  pageExtensions: ['md', 'mdx', 'tsx'],
  productionBrowserSourceMaps: true
})

import remarkMdx, { Root } from 'remark-mdx'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import remarkToc from 'remark-toc'
import { unified } from 'unified'

import { Markdown } from './markdown'

export abstract class MdAstTreeAdapter {
  public static parse = (markdown: Markdown): Root => {
    return unified().use(remarkParse).use(remarkMdx).parse(markdown.content)
  }

  public static stringify = (astTree: Root): string => {
    return unified().use(remarkStringify).use(remarkMdx).stringify(astTree)
  }

  public static addTableOfContents = (markdown: Markdown) => {
    const astTree = unified().use(remarkToc, { heading: 'Содержание' }).runSync(this.parse(markdown))
    const markdownContent = this.stringify(astTree)
    return new Markdown(markdownContent)
  }
}

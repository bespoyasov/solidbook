import remarkMdx from 'remark-mdx'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import remarkToc from 'remark-toc'
import { unified } from 'unified'
import { Node, Parent } from 'unist'

import { Markdown } from './markdown'

export type MarkdownAstTreeNode = { value: string; depth: number; type: string; content: string }

export abstract class MdAstTreeAdapter {
  public static parse = (markdown: Markdown): Parent => {
    return unified().use(remarkParse).use(remarkMdx).parse(markdown.content) as Parent
  }

  public static stringify = (astTree: Node): string => {
    return unified().use(remarkStringify).use(remarkMdx).stringify(astTree) as string
  }

  public static addTableOfContents = (markdown: Markdown) => {
    const astTree = unified().use(remarkToc, { heading: 'Содержание' }).runSync(this.parse(markdown))
    const markdownContent = this.stringify(astTree)
    return new Markdown(markdownContent)
  }
}

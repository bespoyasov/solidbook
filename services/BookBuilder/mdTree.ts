import remarkMdx from 'remark-mdx'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import remarkToc from 'remark-toc'
import { unified } from 'unified'

import { Markdown } from './md'

export class MdTree {
  parse = (markdown: Markdown) => {
    return unified().use(remarkParse).use(remarkMdx).parse(markdown.content)
  }

  stringify = (tree) => {
    return unified().use(remarkStringify).use(remarkMdx).stringify(tree)
  }

  addTableOfContents = (markdown: Markdown) => {
    const treeRoot4 = unified().use(remarkToc, { heading: 'Содержание' }).runSync(this.parse(markdown))

    return new Markdown(this.stringify(treeRoot4) as string)
  }
}

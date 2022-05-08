import remarkParse from 'remark-parse'
import remarkMdx from 'remark-mdx'
import { unified } from 'unified'
import remarkStringify from 'remark-stringify'
import { Markdown } from './md'
import remarkToc from 'remark-toc'

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

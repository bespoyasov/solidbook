import { filter } from 'unist-util-filter'
import { Test } from 'unist-util-is'

import { Markdown, MarkdownBook, MarkdownBookSection, MarkdownBookSubsection } from './md'
import { MdTree } from './mdTree'
import { MdxBook } from './mdx'

const invalidTypes = ['mdxjsEsm', 'mdxJsxFlowElement']

const isForbiddenElement = (el: Node) => invalidTypes.includes(el.type)
const isQuestionsChapterHeading = (el: Node) => el.type === 'heading' && el.children[0].value === 'Вопросы'
const isAnnotationList = (el: Node, index: number, parent: Parent) =>
  parent && parent.type === 'root' && index === parent.children.length - 1 && el.type === 'paragraph'

const filterMdElement: Test = (el, index, parent) => {
  if (isForbiddenElement(el) || isQuestionsChapterHeading(el) || isAnnotationList(el, index, parent)) {
    return false
  }
  return true
}

export class MdxBookMarkdownBookAdapter {
  mdxBookToMarkdownBook(mdxBook: MdxBook): MarkdownBook {
    const book = new MarkdownBook()

    mdxBook.sections.forEach((section) => {
      const newBookSection = new MarkdownBookSection()

      section.subsections.forEach((subsection) => {
        const data = subsection.content
        let treeRoot = mdTree.parse(new Markdown(data))

        treeRoot = filter(treeRoot, changeNode)

        const md = mdTree.stringify(treeRoot) as string
        const newSubSection = new MarkdownBookSubsection(subsection.path, new Markdown(md), subsection)
        newBookSection.addSubSection(newSubSection)
      })
      book.addSection(newBookSection)
    })

    return book
  }
}

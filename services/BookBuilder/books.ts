import { filter } from 'unist-util-filter'
import { Test, TestFunctionAnything } from 'unist-util-is'

import { MarkdownTree } from './markdownTree'
import { MdAstTreeAdapter } from './mdAstTree'

export class MdxBook extends MarkdownTree {
  constructor() {
    super()
  }
}

export class MarkdownBook extends MarkdownTree {
  constructor() {
    super()
  }
}

const invalidTypes = ['mdxjsEsm', 'mdxJsxFlowElement']

const isForbiddenElement: TestFunctionAnything = (el) => invalidTypes.includes(el.type)
const isQuestionsChapterHeading: TestFunctionAnything = (el) =>
  el.type === 'heading' && el.children[0].value === 'Вопросы'
const isAnnotationList: TestFunctionAnything = (el, index, parent) =>
  parent && parent.type === 'root' && index === parent.children.length - 1 && el.type === 'paragraph'

const excludeMdxElement: Test = (...args) => {
  if (isForbiddenElement(...args) || isQuestionsChapterHeading(...args) || isAnnotationList(...args)) {
    return false
  }
  return true
}

const excludeMdxElementsFromBook = (mdxBook: MdxBook): MarkdownBook => {
  const book = new MarkdownBook()

  mdxBook.sections.forEach((section) => {
    const newSection = book.addSection().getLastSection()

    section.subsections.forEach((subsection) => {
      const mdx = subsection.content
      const mdxAstTree = MdAstTreeAdapter.parse(mdx)

      const mdAstTree = filter(mdxAstTree, excludeMdxElement)
      const mdBook = MdAstTreeAdapter.stringify(mdAstTree)
      newSection.addSubSection(mdBook, subsection.name)
    })
  })

  return book
}

export abstract class MdxBookMarkdownBookAdapter {
  public static mdxBookToMarkdownBook(mdxBook: MdxBook): MarkdownBook {
    return excludeMdxElementsFromBook(mdxBook)
  }
}

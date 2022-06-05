import { Literal, Parent } from 'unist'
import { filter } from 'unist-util-filter'
import { Test, TestFunctionAnything } from 'unist-util-is'

import { MarkdownBook, MdxBook } from './books'
import { MdAstTreeAdapter } from './mdAstTree'

const invalidTypes = ['mdxjsEsm', 'mdxJsxFlowElement']

interface Element extends Parent {
  type: string
  children: Literal[]
}

const isForbiddenElement: TestFunctionAnything = (el) => invalidTypes.includes(el.type)
const isQuestionsChapterHeading: TestFunctionAnything = (el) =>
  (el as Element).type === 'heading' && (el as Element).children[0].value === 'Вопросы'
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

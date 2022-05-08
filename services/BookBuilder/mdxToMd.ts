import { Markdown, MarkdownBook, MarkdownBookSection, MarkdownBookSubsection } from './md'
import { MdxBook } from './mdx'
import { filter } from 'unist-util-filter'
import type { Test } from 'unist-util-is'
import { MdTree } from './mdTree'

const invalidTypes = ['mdxjsEsm', 'mdxJsxFlowElement']

const mdTree = new MdTree()

// удаляем лишние элементы из markdown
const changeNode: Test = (el, index, parent) => {
  if (invalidTypes.includes(el.type)) {
    // исключаем все не-markdown элементы
    return false
  } else if (el.type === 'heading' && el.children[0].value === 'Вопросы') {
    // исключаем заголовок "Вопросы"
    return false
  } else if (parent && parent.type === 'root' && index === parent.children.length - 1 && el.type === 'paragraph') {
    // исключаем список подсказок
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

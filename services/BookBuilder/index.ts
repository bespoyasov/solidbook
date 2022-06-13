import { readFileSync, writeFileSync } from 'fs'

import { Heading } from 'mdast'
import { visit } from 'unist-util-visit'

import { MarkdownBook, MdxBook } from './books'
import { GlossaryMarkdownAdapter } from './glossary'
import { MarkdownTreeMarkdownAdapter } from './markdownTreeMarkdownAdapter'
import { MdAstTreeAdapter } from './mdAstTree'
import { MdxBookMarkdownBookAdapter } from './mdxToMd'
import { MarkdownPdfAdapter } from './pdf'

/**
 *
 * TODO:
 *  [] - Содержание не поддерживается читалками (adobe reader, mac os preview, edge browser)
 *  [] - Внутренние ссылки второго уровня глубины сломаны (/lsp/in-real-life) (можно обернуть заголовок в тег и добавить якорь,
 *  например <h1 id="lsp/patterns">Шаблоны проектирования и приёмы рефакторинга</h1>
 *  ,пока это не работает, так как remark определяет такой элемент как paragraph, а не heading
 *  https://github.com/mdx-js/mdx/issues/1488)
 */

const regexForTitle = new RegExp("title: '(.*)'", '')

const formatBook = (mdxBook: MdxBook) => (book: MarkdownBook) => {
  for (let sectionIndex = 0; sectionIndex < book.sections.length; sectionIndex++) {
    const mdSection = book.sections[sectionIndex]
    const mdxSection = mdxBook.sections[sectionIndex]

    for (let subSectionIndex = 0; subSectionIndex < mdSection.subsections.length; subSectionIndex++) {
      const mdSubSection = mdSection.subsections[subSectionIndex]
      const mdxSubSection = mdxSection.subsections[subSectionIndex]

      const markdownAstTree = MdAstTreeAdapter.parse(mdSubSection.content)
      const mdxAstTree = MdAstTreeAdapter.parse(mdxSubSection.content)

      mdSubSection.updateContent('')

      // заменяем внутренние ссылки на якоря
      visit(markdownAstTree, 'link', (node: { url: string }) => {
        if (node.url[0] === '/') {
          node.url = node.url.replace('/', '#')
        }
      })

      // добавляем заголовок для раздела "Введение"
      if (mdSubSection.name.search('pages/index.mdx') !== -1) {
        visit(mdxAstTree, 'mdxjsEsm', (node) => {
          if (node.value.search('export const meta') !== -1) {
            const title = regexForTitle.exec(node.value)[1]
            mdSubSection.addContent(`# ${title}\n`)
          }
        })
        // добавляем заголовок для остальных разделов
      } else if (mdSubSection.name.search('index.mdx') !== -1) {
        visit(mdxAstTree, 'mdxjsEsm', (node) => {
          if (node.value.search('export const meta') !== -1) {
            const title = regexForTitle.exec(node.value)[1]
            const titleLeftPart = title.split('|')[0]
            mdSubSection.addContent(`# ${titleLeftPart}\n`)
          }
        })
      }

      // увеличиваем глубину заголовков, так как ранее мы добавили заголовки первого уровня
      if (mdSubSection.name.search('pages/afterwords.mdx') === -1) {
        visit(markdownAstTree, 'heading', (node) => {
          node.depth = (node.depth + 1) as Heading['depth']
        })
      }

      mdSubSection.addContent(MdAstTreeAdapter.stringify(markdownAstTree))

      // добавляем отступы после каждого подраздела
      mdSubSection.content.addText('<br></br>\n\n')
    }

    mdSection.addSubSection(`\n <div class="page-break">&nbsp;</div> \n`)
  }
  return book
}

enum Section {
  ROOT = '.',
  SRP = 'srp',
  OCP = 'ocp',
  LSP = 'lsp',
  ISP = 'isp',
  DIP = 'dip'
}

enum SubSection {
  Index = 'index',
  Ideal = 'in-ideal-world',
  Real = 'in-real-life',
  Patterns = 'patterns',
  Antipatterns = 'antipatterns',
  Limits = 'limits-and-caveats',
  Afterwords = 'afterwords'
}

const BookSchema: {
  sections: {
    name: Section
    subSections: SubSection[]
  }[]
} = {
  sections: [
    {
      name: Section.ROOT,
      subSections: [SubSection.Index]
    },
    {
      name: Section.SRP,
      subSections: [
        SubSection.Index,
        SubSection.Ideal,
        SubSection.Real,
        SubSection.Patterns,
        SubSection.Antipatterns,
        SubSection.Limits
      ]
    },
    {
      name: Section.OCP,
      subSections: [
        SubSection.Index,
        SubSection.Ideal,
        SubSection.Real,
        SubSection.Patterns,
        SubSection.Antipatterns,
        SubSection.Limits
      ]
    },
    {
      name: Section.LSP,
      subSections: [
        SubSection.Index,
        SubSection.Ideal,
        SubSection.Real,
        SubSection.Patterns,
        SubSection.Antipatterns,
        SubSection.Limits
      ]
    },
    {
      name: Section.ISP,
      subSections: [
        SubSection.Index,
        SubSection.Ideal,
        SubSection.Real,
        SubSection.Patterns,
        SubSection.Antipatterns,
        SubSection.Limits
      ]
    },
    {
      name: Section.DIP,
      subSections: [
        SubSection.Index,
        SubSection.Ideal,
        SubSection.Real,
        SubSection.Patterns,
        SubSection.Antipatterns,
        SubSection.Limits
      ]
    },
    {
      name: Section.ROOT,
      subSections: [SubSection.Afterwords]
    }
  ]
}

const fillMdxBookWithContent = (mdxBook: MdxBook): void => {
  mdxBook.addSection().getLastSection().addSubSection('# Содержание')

  BookSchema.sections.forEach((section) => {
    const newSection = mdxBook.addSection().getLastSection()

    section.subSections.forEach((subSection) => {
      const filePath = `pages/${section.name}/${subSection}.mdx`

      newSection.addSubSection(readFileSync(filePath, 'utf8'), filePath)
    })
  })
}

const run = async () => {
  const mdxBook = new MdxBook()

  fillMdxBookWithContent(mdxBook)

  const markdownBook = MdxBookMarkdownBookAdapter.mdxBookToMarkdownBook(mdxBook)
  const formattedBook = markdownBook.format(formatBook(mdxBook))

  const glossaryMarkdown = GlossaryMarkdownAdapter.generateGlossary(mdxBook)
  formattedBook.addSection().getLastSection().addSubSection(glossaryMarkdown.content)

  const markdownContent = MarkdownTreeMarkdownAdapter.markdownTreeToMarkdown(formattedBook)

  const markdownWithTableOfContents = MdAstTreeAdapter.addTableOfContents(markdownContent)

  const pdf = await MarkdownPdfAdapter.markdownToPdf(markdownWithTableOfContents)
  writeFileSync('public/solid-book.pdf', pdf.content)
}

run()

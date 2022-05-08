import fs from 'fs'
import { visit } from 'unist-util-visit'
import { MarkdownPdfAdapter } from './mdToPdf'
import { MdxBookMarkdownBookAdapter } from './mdxToMd'
import { Markdown, MarkdownBook, MarkdownBookMarkdownAdapter, MarkdownBookSection, MarkdownBookSubsection } from './md'
import { MdxBook, MdxBookSection, MdxBookSubSection } from './mdx'
import { Glossary, GlossaryMarkdownAdapter } from './glossary'
import { MdTree } from './mdTree'

/**
 *
 * TODO:
 *  [] - Содержание не поддерживается читалками (adobe reader, mac os preview, edge browser)
 *  [] - Внутренние ссылки второго уровня глубины сломаны (/lsp/in-real-life)
 *  [] - не работает разрыв между страницами в начале каждого раздела
 */

const mdxBookMarkdownBookAdapter = new MdxBookMarkdownBookAdapter()
const markdownBookMarkdownAdapter = new MarkdownBookMarkdownAdapter()
const markdownPdfAdapter = new MarkdownPdfAdapter()
const mdTree = new MdTree()
const regexForTitle = new RegExp("title: '(.*)'", '')

const formatBook = (book: MarkdownBook) => {
  book.sections.forEach((section) => {
    section.subsections.forEach((subsection) => {
      const { name } = subsection
      let mdxTreeRoot = mdTree.parse(new Markdown(subsection.mdx.content))
      let markdownTreeRoot = mdTree.parse(new Markdown(subsection.content.content))

      subsection.content.changeContent((markdown) => {
        markdown.content = ''

        // заменяем внутренние ссылки на якоря
        visit(markdownTreeRoot, 'link', (node: { url: string }) => {
          if (node.url[0] === '/') {
            node.url = node.url.replace('/', '#')
          }
        })

        // добавляем заголовок для раздела "Введение"
        if (subsection.name.search('pages/index.mdx') !== -1) {
          visit(mdxTreeRoot, 'mdxjsEsm', (node: { value: string; depth: number; type: string; content: string }) => {
            if (node.value.search('export const meta') !== -1) {
              const title = regexForTitle.exec(node.value)[1]
              markdown.addText(`# ${title}\n`)
            }
          })
          // добавляем заголовок для остальных разделов
        } else if (subsection.name.search('index.mdx') !== -1) {
          visit(mdxTreeRoot, 'mdxjsEsm', (node: { value: string; depth: number; type: string; content: string }) => {
            if (node.value.search('export const meta') !== -1) {
              const title = regexForTitle.exec(node.value)[1]
              const titleLeftPart = title.split('|')[0]
              markdown.addText(`# ${titleLeftPart}\n`)
            }
          })
        }

        // увеличиваем глубину заголовков, так как ранее мы добавили заголовки первого уровня
        if (name.search('pages/afterwords.mdx') === -1) {
          visit(markdownTreeRoot, 'heading', (node: { depth: number }) => {
            node.depth = node.depth + 1
          })
        }

        markdown.addText(mdTree.stringify(markdownTreeRoot) as string)
        // добавляем отступы после каждого подраздела
        markdown.addText('<br></br>\n\n')

        return markdown.content
      })
      subsection.content.addText('<br></br>\n\n')
    })
    section.addSubSection(
      new MarkdownBookSubsection('', new Markdown(`\n\n <br></br> <div class="page-break"></div> <br></br> \n\n`))
    )
  })

  return book
}

const regexForAnnotation = new RegExp('\\*\\[(.*)\\]:(.*)', 'gm')

const generateGlossary = (markdownBook: MdxBook) => {
  const glossary = new Glossary()
  const glossaryMarkdownAdapter = new GlossaryMarkdownAdapter()

  markdownBook.sections.forEach((section) => {
    section.subsections.forEach((subsection) => {
      const treeRoot = mdTree.parse(new Markdown(subsection.content))

      const lastElem = treeRoot.children[treeRoot.children.length - 1]

      if (lastElem.type === 'paragraph') {
        let groups = null

        // и попутно добавляем подсказки в список словаря
        while ((groups = regexForAnnotation.exec(lastElem.children[0].value)) !== null) {
          const [, term, description] = groups
          glossary.addTerm(term, description)
        }
      }
    })
  })

  const markdown = glossaryMarkdownAdapter.convertToMarkdown(glossary)
  markdown.changeContent((markdown) => {
    return `\n # Словарь  \n` + markdown.content
  })
  return markdown
}

const run = async () => {
  const mdxBook = new MdxBook()

  mdxBook.addSection(new MdxBookSection().addSubSection(new MdxBookSubSection('', '# Содержание')))
  mdxBook.addSection(new MdxBookSection().addSubSection(new MdxBookSubSection('pages/index.mdx')))
  mdxBook.addSection(
    new MdxBookSection()
      .addSubSection(new MdxBookSubSection('pages/srp/index.mdx'))
      .addSubSection(new MdxBookSubSection('pages/srp/in-ideal-world.mdx'))
      .addSubSection(new MdxBookSubSection('pages/srp/patterns.mdx'))
      .addSubSection(new MdxBookSubSection('pages/srp/antipatterns.mdx'))
      .addSubSection(new MdxBookSubSection('pages/srp/limits-and-caveats.mdx'))
  )
  mdxBook.addSection(
    new MdxBookSection()
      .addSubSection(new MdxBookSubSection('pages/ocp/index.mdx'))
      .addSubSection(new MdxBookSubSection('pages/ocp/in-ideal-world.mdx'))
      .addSubSection(new MdxBookSubSection('pages/ocp/patterns.mdx'))
      .addSubSection(new MdxBookSubSection('pages/ocp/antipatterns.mdx'))
      .addSubSection(new MdxBookSubSection('pages/ocp/limits-and-caveats.mdx'))
  )
  mdxBook.addSection(
    new MdxBookSection()
      .addSubSection(new MdxBookSubSection('pages/lsp/index.mdx'))
      .addSubSection(new MdxBookSubSection('pages/lsp/in-ideal-world.mdx'))
      .addSubSection(new MdxBookSubSection('pages/lsp/patterns.mdx'))
      .addSubSection(new MdxBookSubSection('pages/lsp/antipatterns.mdx'))
      .addSubSection(new MdxBookSubSection('pages/lsp/limits-and-caveats.mdx'))
  )
  mdxBook.addSection(
    new MdxBookSection()
      .addSubSection(new MdxBookSubSection('pages/isp/index.mdx'))
      .addSubSection(new MdxBookSubSection('pages/isp/in-ideal-world.mdx'))
      .addSubSection(new MdxBookSubSection('pages/isp/patterns.mdx'))
      .addSubSection(new MdxBookSubSection('pages/isp/antipatterns.mdx'))
      .addSubSection(new MdxBookSubSection('pages/isp/limits-and-caveats.mdx'))
  )
  mdxBook.addSection(
    new MdxBookSection()
      .addSubSection(new MdxBookSubSection('pages/dip/index.mdx'))
      .addSubSection(new MdxBookSubSection('pages/dip/in-ideal-world.mdx'))
      .addSubSection(new MdxBookSubSection('pages/dip/patterns.mdx'))
      .addSubSection(new MdxBookSubSection('pages/dip/antipatterns.mdx'))
      .addSubSection(new MdxBookSubSection('pages/dip/limits-and-caveats.mdx'))
  )
  mdxBook.addSection(new MdxBookSection().addSubSection(new MdxBookSubSection('pages/afterwords.mdx')))

  const markdownBook = mdxBookMarkdownBookAdapter.mdxBookToMarkdownBook(mdxBook)

  const formattedBook = formatBook(markdownBook)

  const glossaryMarkdown = generateGlossary(mdxBook)
  const GlossarySection = new MarkdownBookSection().addSubSection(
    new MarkdownBookSubsection('glossary', glossaryMarkdown)
  )
  formattedBook.addSection(GlossarySection)

  const BookWithTableOfContent = mdTree.addTableOfContents(markdownBookMarkdownAdapter.bookToMarkdown(formattedBook))

  const pdf = await markdownPdfAdapter.markdownToPdf(BookWithTableOfContent)
  fs.writeFileSync('public/solid_book.pdf', pdf.content)
}

run()

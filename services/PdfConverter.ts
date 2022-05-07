import fsSync from 'fs'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkMdx from 'remark-mdx'
import remarkStringify from 'remark-stringify'
import { mdToPdf } from 'md-to-pdf'
import { marked } from 'marked'
import { Parent } from 'unist'
import { visit } from 'unist-util-visit'

/**
 *
 * TODO:
 *  [] - Содержание не поддерживается читалками (adobe reader, mac os preview, edge browser)
 *  [] - Внутренние ссылки второго уровня глубины сломаны (/lsp/in-real-life)
 */

const { promises: fs } = fsSync

type Child = { value?: string; depth?: string; type: string; children: Child[] }

const parseConfig = unified().use(remarkParse).use(remarkMdx)

const stringifyConfig = unified().use(remarkStringify).use(remarkMdx)

const invalidTypes = ['mdxjsEsm', 'mdxJsxFlowElement']

let glossary = {}

const pages = [
  ['pages/index.mdx'],
  [
    'pages/srp/index.mdx',
    'pages/srp/in-ideal-world.mdx',
    'pages/srp/in-real-life.mdx',
    'pages/srp/patterns.mdx',
    'pages/srp/antipatterns.mdx',
    'pages/srp/limits-and-caveats.mdx'
  ],
  [
    'pages/ocp/index.mdx',
    'pages/ocp/in-ideal-world.mdx',
    'pages/ocp/in-real-life.mdx',
    'pages/ocp/patterns.mdx',
    'pages/ocp/antipatterns.mdx',
    'pages/ocp/limits-and-caveats.mdx'
  ],
  [
    'pages/lsp/index.mdx',
    'pages/lsp/in-ideal-world.mdx',
    'pages/lsp/in-real-life.mdx',
    'pages/lsp/patterns.mdx',
    'pages/lsp/antipatterns.mdx',
    'pages/lsp/limits-and-caveats.mdx'
  ],
  [
    'pages/isp/index.mdx',
    'pages/isp/in-ideal-world.mdx',
    'pages/isp/in-real-life.mdx',
    'pages/isp/patterns.mdx',
    'pages/isp/antipatterns.mdx',
    'pages/isp/limits-and-caveats.mdx'
  ],
  [
    'pages/dip/index.mdx',
    'pages/dip/in-ideal-world.mdx',
    'pages/dip/in-real-life.mdx',
    'pages/dip/patterns.mdx',
    'pages/dip/antipatterns.mdx',
    'pages/dip/limits-and-caveats.mdx'
  ],
  ['pages/afterwords.mdx']
]

const regexForTitle = new RegExp("title: '(.*)'", '')
const regexForSuggest = new RegExp('\\*\\[(.*)\\]:(.*)', 'gm')

const generateTableOfContent = (md: string) => {
  const toc = []
  const renderer = new marked.Renderer()

  /** generate table of content */
  renderer.heading = (text, level, raw, slugger) => {
    const slug = slugger.slug(raw)
    toc.push({ level, text, slug })
    return text
  }

  marked(md, { renderer })

  const tableOfContent =
    '# Содержание' +
    '\n' +
    toc.map((t) => `${Array(t.level).join('  ')}- [${t.text}](#${t.slug})`).join('\n\n') +
    `\n\n<div class="page-break"></div><br> \n\n`
  /** generate table of content */

  return tableOfContent
}

const formatMarkdown = async (parts: string[][]) => {
  let newMd = ''

  parts.forEach((files) => {
    files.forEach((file) => {
      const data = fsSync.readFileSync(file, 'utf8')

      const treeRoot = parseConfig.parse(data) as Parent & { children: Child[] }

      visit(treeRoot, 'link', (node: { url: string }) => {
        if (node.url[0] === '/') {
          node.url = node.url.replace('/', '#')
        }
      })

      const changeNode = (el: Child, index: number) => {
        // добавляем заголовок для раздела "Вступление"
        if (file.search('pages/index.mdx') !== -1) {
          // for pages/index.mdx only
          if (el.type === 'mdxjsEsm' && el.value.search('export const meta') !== -1) {
            const title = regexForTitle.exec(el.value)[1]
            newMd += `# ${title}\n`
          }
          // добавляем заголовок для остальных разделов
        } else if (file.search('index.mdx') !== -1) {
          // for pages/[part]/index.mdx
          if (el.type === 'mdxjsEsm' && el.value.search('export const meta') !== -1) {
            const title = regexForTitle.exec(el.value)[1]
            const titleLeftPart = title.split('|')[0]
            newMd += `# ${titleLeftPart}\n`
          }
        }

        // увеличиваем глубину заголовков, так как выше мы добавили заголовки первого уровня
        // for all md except pages/afterwords.mdx
        if (file.search('pages/afterwords.mdx') === -1) {
          if (el.type === 'heading') {
            el.depth = el.depth + 1
          }
        }

        if (invalidTypes.includes(el.type)) {
          // исключаем все не-markdown элементы
          return false
        } else if (el.type === 'heading' && el.children[0].value === 'Вопросы') {
          // исключаем заголовок "Вопросы"
          return false
        } else if (index === treeRoot.children.length - 1 && el.type === 'paragraph') {
          // исключаем список подсказок

          let m = null

          // и попутно добавляем подсказки в список словаря
          while ((m = regexForSuggest.exec(el.children[0].value)) !== null) {
            glossary[m[1]] = m[2]
          }
          return false
        }
        return true
      }

      treeRoot.children = treeRoot.children.filter(changeNode)

      newMd += stringifyConfig.stringify(treeRoot)

      // добавляем отступы после каждого подраздела
      newMd += '<br></br>\n\n'
    })

    // добавляем разрыв страницы после каждого раздела
    newMd += `\n\n<div class="page-break"></div><br> \n\n`
  })

  return newMd
}

const generateGlossary = () => {
  let gloss = ''
  const keys = Object.keys(glossary).sort()

  keys.forEach((definite) => {
    gloss += `_${definite}_ - ${glossary[definite]} <br></br> \n`
  })

  return `# Словарь  \n` + gloss
}

const generatePDF = async (text: string) => {
  const pdf = await mdToPdf({ content: text }, { document_title: 'SOLID book' }).catch(console.error)

  if (pdf) {
    await fs.writeFile('public/solid_book.pdf', pdf.content)
  } else {
    throw new Error('pdf creation was failed')
  }
}

const run = async () => {
  const formattedMarkdown = await formatMarkdown(pages)
  const gloss = generateGlossary()
  const tableOfContent = generateTableOfContent(formattedMarkdown + gloss)
  generatePDF(tableOfContent + formattedMarkdown + gloss)
}

run()

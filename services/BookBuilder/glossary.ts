import { Literal } from 'mdast'

import { MdxBook } from './books'
import { Markdown } from './markdown'
import { MdAstTreeAdapter } from './mdAstTree'

const regexForAnnotation = new RegExp('\\*\\[(.*)\\]:(.*)', 'gm')

export class Glossary {
  terms: {
    [term: string]: string
  } = {}

  addTerm = (term: string, description: string) => {
    this.terms[term] = description
  }
}

export abstract class GlossaryMarkdownAdapter {
  private static convertToMarkdown = (glossary: Glossary): Markdown => {
    const glossaryMarkdown = new Markdown('')
    const sortedTerms = Object.keys(glossary.terms).sort()

    sortedTerms.forEach((term) => {
      const description = glossary.terms[term]
      glossaryMarkdown.addText(`- _${term}_ - ${description} \n`)
    })

    return glossaryMarkdown
  }

  public static generateGlossary = (markdownBook: MdxBook) => {
    const glossary = new Glossary()

    markdownBook.sections.forEach((section) => {
      section.subsections.forEach((subsection) => {
        const astTree = MdAstTreeAdapter.parse(subsection.content)

        const lastElem = astTree.children[astTree.children.length - 1]

        if (lastElem.type === 'paragraph') {
          let groups: RegExpExecArray = null

          while ((groups = regexForAnnotation.exec((lastElem.children[0] as Literal).value)) !== null) {
            const [, term, description] = groups
            glossary.addTerm(term, description)
          }
        }
      })
    })

    if (Object.keys(glossary.terms).length > 0) {
      const markdown = this.convertToMarkdown(glossary)
      markdown.updateContent(`\n # Словарь  \n` + markdown.content)
      return markdown
    } else {
      return new Markdown('')
    }
  }
}

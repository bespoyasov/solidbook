import { Markdown } from './md'

export class Glossary {
  terms: {
    [term: string]: string
  } = {}

  addTerm = (term: string, description: string) => {
    this.terms[term] = description
  }
}

export class GlossaryMarkdownAdapter {
  convertToMarkdown = (glossary: Glossary): Markdown => {
    let markdown = ''
    const keys = Object.keys(glossary.terms).sort()

    keys.forEach((definite) => {
      markdown += `_${definite}_ - ${glossary.terms[definite]} <br></br> \n`
    })

    return new Markdown(markdown)
  }
}

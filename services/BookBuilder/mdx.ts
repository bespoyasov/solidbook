import { readFileSync } from 'fs'

import { Markdown } from './md'

export class MdxBookSubSection {
  path: string
  content: string

  constructor(path?: string, content?: string) {
    if (path) {
      this.path = path
      const data = readFileSync(path, 'utf8')
      this.content = data
    }
    if (content) {
      this.path = ''
      this.content = content
    }
  }

  getSubSectionContent = (): string => {
    return readFileSync(this.path, 'utf8')
  }
}

export class MdxBookSection {
  subsections: MdxBookSubSection[] = []

  addSubSection = (subsection: MdxBookSubSection) => {
    this.subsections.push(subsection)
    return this
  }
}
export class MdxBook {
  sections: MdxBookSection[] = []

  addSection = (section: MdxBookSection) => {
    this.sections.push(section)
  }
}

export class MdxBookMarkdownAdapter {
  bookToMarkdown = (book: MdxBook): Markdown => {
    const markdown = new Markdown('')

    book.sections.forEach((section) => {
      section.subsections.forEach((subsection) => {
        markdown.addText(subsection.content)
      })
    })

    return markdown
  }
}

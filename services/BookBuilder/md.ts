import { MdxBookSubSection } from './mdx'

export class MarkdownBookSubsection {
  name: string
  content: Markdown
  mdx: MdxBookSubSection

  constructor(name: string, content: Markdown, mdx?: MdxBookSubSection) {
    this.content = content
    this.name = name
    if (mdx) {
      this.mdx = mdx
    }
  }
}

export class MarkdownBookSection {
  subsections: MarkdownBookSubsection[] = []

  addSubSection = (subsection: MarkdownBookSubsection) => {
    this.subsections.push(subsection)
    return this
  }
}

export class MarkdownBook {
  sections: MarkdownBookSection[] = []

  addSection = (section: MarkdownBookSection) => {
    this.sections.push(section)
  }
}

export class MarkdownBookMarkdownAdapter {
  bookToMarkdown = (book: MarkdownBook): Markdown => {
    const markdown = new Markdown('')

    book.sections.forEach((section) => {
      section.subsections.forEach((subsection) => {
        markdown.addText(subsection.content.content)
      })
    })

    return markdown
  }
}

export class Markdown {
  content: string

  constructor(markdown: string) {
    this.content = markdown
  }

  addText = (text: string) => {
    this.content += text
  }

  changeContent = (fn: (content: this) => string) => {
    this.content = fn(this)
  }
}

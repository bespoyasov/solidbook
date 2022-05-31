import { MarkdownTree } from './markdownTree'

export class Markdown {
  content: string

  constructor(markdown: string) {
    this.content = markdown
  }

  addText = (text: string) => {
    this.content += text
  }

  updateContent = (newContent: string) => {
    this.content = newContent
  }
}

export abstract class MarkdownTreeMarkdownAdapter {
  public static markdownTreeToMarkdown = (tree: MarkdownTree): Markdown => {
    const markdown = new Markdown('')

    tree.sections.forEach((section) => {
      section.subsections.forEach((subsection) => {
        markdown.addText(subsection.content.content)
      })
    })

    return markdown
  }
}

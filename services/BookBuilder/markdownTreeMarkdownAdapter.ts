import { Markdown } from './markdown'
import { MarkdownTree } from './markdownTree'

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

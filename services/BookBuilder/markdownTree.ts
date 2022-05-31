import { Markdown } from './markdown'

export class MarkdownBookSubsection {
  name: string
  content: Markdown

  constructor(name: string, content: Markdown) {
    this.content = content
    this.name = name
  }

  addContent = (content: string) => {
    this.content.addText(content)
  }

  updateContent = (newContent: string) => {
    this.content.updateContent(newContent)
  }
}

export class MarkdownBookSection {
  subsections: MarkdownBookSubsection[] = []

  addSubSection = (content: string, sectionName = '') => {
    this.subsections.push(new MarkdownBookSubsection(sectionName, new Markdown(content)))
    return this
  }

  addSubSections = (...subsections: { content: string; sectionName: string }[]) => {
    for (const subsection of subsections) {
      this.addSubSection(subsection.content, subsection.sectionName)
    }
    return this
  }
}

export class MarkdownTree {
  sections: MarkdownBookSection[] = []

  addSection = () => {
    const newSection = new MarkdownBookSection()
    this.sections.push(newSection)
    return this
  }

  getLastSection = () => {
    return this.sections[this.sections.length - 1]
  }

  format = (func: (book: MarkdownTree) => MarkdownTree) => {
    return func(this)
  }
}

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

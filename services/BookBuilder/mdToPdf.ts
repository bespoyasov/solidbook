import { Markdown } from './md'
import { Pdf } from './pdf'
import { mdToPdf } from 'md-to-pdf'

export class MarkdownPdfAdapter {
  markdownToPdf = async (markdown: Markdown): Promise<Pdf> => {
    const pdf = await mdToPdf({ content: markdown.content }, { document_title: 'SOLID book' }).catch(console.error)

    if (pdf) {
      return new Pdf(pdf.content)
    } else {
      throw new Error('pdf creation was failed')
    }
  }
}

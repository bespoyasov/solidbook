import { mdToPdf } from 'md-to-pdf'

import { Markdown } from './markdown'

export class Pdf {
  content: Buffer

  constructor(pdfContent: Buffer) {
    this.content = pdfContent
  }
}

export abstract class MarkdownPdfAdapter {
  public static markdownToPdf = async (markdown: Markdown): Promise<Pdf> => {
    const pdf = await mdToPdf(
      { content: markdown.content },
      { document_title: 'SOLID book', launch_options: { args: ['--no-sandbox'] } }
    ).catch(console.error)

    if (pdf) {
      return new Pdf(pdf.content)
    } else {
      throw new Error('PDF creation failed.')
    }
  }
}

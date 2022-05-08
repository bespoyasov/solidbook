export class Pdf {
  content: Buffer

  constructor(pdfContent: Buffer) {
    this.content = pdfContent
  }
}

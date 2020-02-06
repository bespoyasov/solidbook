import Document, { Head, Main, DocumentContext, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface IProps {
  styleTags: any
}
export default class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage(
      (App: any) => (props: any) =>
        sheet.collectStyles(<App {...props} />) as React.ReactElement<any>
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    const { styleTags } = this.props

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#f8364c" />
          <meta name="msapplication-TileColor" content="#f8364c" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:type" content="article" />
          <meta property="og:title" content="SOLID BOOK" />
          <meta property="og:site_name" content="Open Tech Authors, SOLID" />
          <meta property="og:url" content="https://ota-solid.now.sh" />
          <meta property="og:image" content="https://ota-solid.now.sh/socials.png" />
          <meta property="article:author" content="https://bespoyasov.ru" />
          <meta property="article:author" content="https://github.com/dex157" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="https://ota-solid.now.sh" />
          <meta name="twitter:title" content="SOLID BOOK" />
          <meta name="twitter:description" content="Книга о принципах объектно-ориентированного дизайна" />
          <meta name="twitter:image" content="https://ota-solid.now.sh/socials.png" />
          <style>{`
            *,
            *::after,
            *::before {
              box-sizing: border-box;
            }

            html, body, #__next {
              width: 100%;
              height: 100%;
              padding: 0;
              margin: 0;
            }
          `}</style>
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

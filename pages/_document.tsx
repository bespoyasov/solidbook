import Document, { Head, Main, NextDocumentContext, NextScript, AnyPageProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Body from 'components/Body'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage((App: any) => (props: AnyPageProps) =>
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
          <link rel="apple-touch-icon" sizes="180x180" href="/satics/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/satics/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/satics/favicon/favicon-16x16.png" />
          <link rel="manifest" href="satics/favicon/site.webmanifest" />
          <link rel="mask-icon" href="satics/favicon/safari-pinned-tab.svg" color="#323330" />
          <meta name="msapplication-TileColor" content="#f7e144" />
          <meta name="theme-color" content="#ffffff" />
          <style>{`
            html, body, #__next {
              width: 100%;
              height: 100%;
              padding: 0;
              margin: 0;
            }
          `}</style>
          {styleTags}
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </html>
    )
  }
}

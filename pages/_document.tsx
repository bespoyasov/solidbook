import Document, { Head, Main, DocumentContext, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
  styleTags: any
}

export default class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />) as React.ReactElement<any> // eslint-disable-line react/jsx-props-no-spreading
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    const { styleTags } = this.props

    return (
      <html lang="ru">
        <Head>
          <style>
            {`
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
          `}
          </style>
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
/* eslint-enable */

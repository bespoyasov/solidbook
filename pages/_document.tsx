import Document, { Html, Head, Main, DocumentContext, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
  styleTags: any
}

export default class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styleTags: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const { styleTags } = this.props

    return (
      <Html lang="ru">
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
      </Html>
    )
  }
}
/* eslint-enable */

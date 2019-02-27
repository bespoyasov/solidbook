import App, { Container } from 'next/app'
import { NextContext, NextStatelessComponent } from 'next'
import React from 'react'

export default class SolidApp extends App {
  static async getInitialProps({ Component, ctx }: { Component: NextStatelessComponent; ctx: NextContext }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

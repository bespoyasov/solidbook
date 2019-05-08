import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../themes/main'
import { Provider as MobxProvider } from 'mobx-react'
import createAppModel, { AppModel } from '~/models/app'
import { Instance } from 'mobx-state-tree'
import ServicesManager from '~/services/ServicesManager'

export default class MyApp extends App {
  appModel: Instance<typeof AppModel>
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  constructor(props) {
    super(props)
    this.appModel = createAppModel()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head />
        <GlobalStyle />
        <MobxProvider app={this.appModel}>
          <>
            <ServicesManager />
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </>
        </MobxProvider>
      </Container>
    )
  }
}

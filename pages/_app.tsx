import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, themes } from '../themes/main'
import { Provider as MobxProvider, observer, inject } from 'mobx-react'
import createAppModel, { AppModel } from '~/models/app'
import createThemeModel, { ThemeModel } from '~/models/theme'
import { Instance } from 'mobx-state-tree'
import ServicesManager from '~/services/ServicesManager'

export default class MyApp extends App {
  appModel: Instance<typeof AppModel>
  themeModel: Instance<typeof ThemeModel>

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  get models() {
    return {
      app: this.appModel,
      theme: this.themeModel
    }
  }

  constructor(props) {
    super(props)
    this.appModel = createAppModel()
    this.themeModel = createThemeModel()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head />
        <MobxProvider {...this.models}>
          <>
            <ServicesManager />
            <ThemeObserver>
              <Component {...pageProps} />
            </ThemeObserver>
          </>
        </MobxProvider>
      </Container>
    )
  }
}

interface ThemeObserverProps {
  theme: Instance<typeof ThemeModel>
  children: React.ReactElement
}

class Theme extends React.Component {
  get injected() {
    return this.props as ThemeObserverProps
  }

  render() {
    const { children, theme } = this.injected
    const { using } = theme

    return (
      <>
        <GlobalStyle theme={themes[using]} />
        <ThemeProvider theme={themes[using]}>{children}</ThemeProvider>
      </>
    )
  }
}
const ThemeObserver = inject('theme')(observer(Theme))

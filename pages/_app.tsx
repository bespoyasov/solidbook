import { Provider as MobxProvider } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import { Observer as ThemeUpdateObserver } from '~/components/ThemeUpdateObserver'
import { ThemeState } from '~/localStorage/ThemeState'
import { AppModel, createAppModel } from '~/models/app'
import { ThemeModel, createThemeModel } from '~/models/theme'
import { ServicesManager } from '~/services/ServicesManager'

import 'prismjs/themes/prism.css'
import '~/components/Code/override.css'
import 'ilyabirman-likely/release/likely.css'

interface MyAppInitialProps {
  pageProps: {
    savedTheme: ReturnType<typeof ThemeState.instance.load>
  }
}

export default class MyApp extends App<MyAppInitialProps> {
  appModel: Instance<typeof AppModel>

  themeModel: Instance<typeof ThemeModel>

  static async getInitialProps({ Component, ctx }) {
    const themeRepository = ThemeState.instance
    themeRepository.setContext(ctx)

    let pageProps = {
      savedTheme: themeRepository.load()
    }

    if (Component.getInitialProps) {
      pageProps = (await Component.getInitialProps(ctx)) as any // eslint-disable-line @typescript-eslint/no-explicit-any
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
    this.themeModel = createThemeModel(props.pageProps.savedTheme)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#f8364c" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
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
        </Head>
        <MobxProvider {...this.models}>
          <>
            <ServicesManager />
            <ThemeUpdateObserver>
              <Component {...pageProps} />
            </ThemeUpdateObserver>
          </>
        </MobxProvider>
      </>
    )
  }
}

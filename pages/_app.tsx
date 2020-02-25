import { Provider as MobxProvider } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import App from 'next/app'
import { AppContextType } from 'next/dist/next-server/lib/utils'
import { Router } from 'next/router'
import React from 'react'

import { Observer as ThemeUpdateObserver } from '~/components/ThemeUpdateObserver'
import { AppModel, createAppModel } from '~/models/app'
import { ThemeModel, createThemeModel } from '~/models/theme'
import { ThemeState } from '~/localStorage/ThemeState'
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

  static async getInitialProps({ Component, ctx }: AppContextType<Router>) {
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

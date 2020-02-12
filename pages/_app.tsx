import React from 'react'
import App from 'next/app'
import { Instance } from 'mobx-state-tree'
import { Provider as MobxProvider } from 'mobx-react'
import { AppModel, createAppModel } from '~/models/app'
import { ThemeModel, createThemeModel } from '~/models/theme'
import { ServicesManager } from '~/services/ServicesManager'
import { ThemeStateRepository } from '~/repository/ThemeStateRepository'
import { Observer as ThemeUpdateObserver } from '~/components/ThemeUpdateObserver'

import 'prismjs/themes/prism.css'
import '~/components/Code/override.css'
import 'ilyabirman-likely/release/likely.css'

export default class MyApp extends App {
  appModel: Instance<typeof AppModel>

  themeModel: Instance<typeof ThemeModel>

  static async getInitialProps({ Component, ctx }: any) {
    const themeRepository = ThemeStateRepository.instance
    themeRepository.setContext(ctx)

    let pageProps = {
      savedTheme: themeRepository.load()
    }

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

  constructor(props: any) {
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

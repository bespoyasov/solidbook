import { observer, inject } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { ThemeModel } from '~/models/theme'
import { GlobalStyle, themes } from '~/themes/main'

interface ThemeObserverProps {
  theme: Instance<typeof ThemeModel>
  children: React.ReactElement
}

class BaseObserver extends React.Component {
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

export const Observer = inject('theme')(observer(BaseObserver))

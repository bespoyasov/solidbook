import * as React from 'react'
import clsx from 'clsx'
import { inject, observer } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import VisuallyHidden from '~/components/VisuallyHidden'
import { ThemeModel } from '~/models/theme'
import { Container, Toggle, Shaft, Trolley } from './style'

interface InjectedProps {
  theme: Instance<typeof ThemeModel>
}

class ThemeToggle extends React.Component {
  get injected() {
    return this.props as InjectedProps
  }

  render() {
    const { using } = this.injected.theme
    const usingDark = using === 'dark'

    return (
      <Container>
        <VisuallyHidden>
          <input id="toggle" type="checkbox" onChange={this.injected.theme.toggleTheme} checked={usingDark} />
        </VisuallyHidden>
        <Toggle aria-label="Переключить тему" role="button" htmlFor="toggle">
          <Shaft>
            <Trolley className={clsx({ active: usingDark })} />
          </Shaft>
        </Toggle>
      </Container>
    )
  }
}

export default inject('theme')(observer(ThemeToggle))

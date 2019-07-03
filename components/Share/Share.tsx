import * as React from 'react'
import { Component } from 'react'
import likely from 'ilyabirman-likely'
import { withTheme } from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Container, Buttons, Label } from './style'
import { AppModel } from '~/models/app'
import { MainThemeProps } from '~/themes/main'
import { Instance } from 'mobx-state-tree'
import clsx from 'clsx'

const networks = [
  { name: 'twitter', action: 'Твитнуть' },
  { name: 'vkontakte', action: 'Поделиться' },
  { name: 'facebook', action: 'Зафейсбучить' },
  { name: 'telegram', action: 'Телеграмнуть' }
]

interface IInjectedProps {
  app: Instance<typeof AppModel>
}

class Share extends Component {
  get injected() {
    return this.props as IInjectedProps & MainThemeProps
  }

  componentDidMount() {
    likely.initiate()
  }

  render() {
    const { app, theme } = this.injected
    const className = clsx('likely', { 'likely-light': theme.using === 'dark' })

    return (
      <Container>
        <Label>Похвастаться 🤘</Label>
        <Buttons>
          <div className={className}>
            {networks.map(({ name, action }) => (
              <div
                key={name}
                className={name}
                data-title={`Мой счёт ${app.userScore} из ${app.totalScore} очков на SOLID-BOOK`}
              >
                {action}
              </div>
            ))}
          </div>
        </Buttons>
      </Container>
    )
  }
}

export default inject('app')(observer(withTheme(Share)))

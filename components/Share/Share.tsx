import clsx from 'clsx'
import likely from 'ilyabirman-likely'
import { inject, observer } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import * as React from 'react'

import { Container, Buttons, Label } from './style'
import { AppModel } from '~/models/app'
import { MainThemeProps } from '~/themes/main'

const networks = [
  { name: 'twitter', action: 'Твитнуть' },
  { name: 'facebook', action: 'Зафейсбучить' },
  { name: 'telegram', action: 'Телеграмнуть' }
]

interface IInjectedProps {
  app: Instance<typeof AppModel>
}

class BaseShare extends React.Component {
  componentDidMount() {
    likely.initiate()
  }

  get injected() {
    return this.props as IInjectedProps & MainThemeProps
  }

  render() {
    const { app, theme } = this.injected
    const className = clsx('likely likely_visible', { 'likely-light': theme.using === 'dark' })

    return (
      <Container>
        <Label>
          Похвастаться{' '}
          <span role="img" aria-label="Horns emoji">
            🤘
          </span>
        </Label>
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

export const Share = inject('app', 'theme')(observer(BaseShare))

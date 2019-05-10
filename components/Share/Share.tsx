import * as React from 'react'
import { Component } from 'react'
import likely from 'ilyabirman-likely'
import { inject, observer } from 'mobx-react'
import { Container, Buttons, Label } from './style'
import { AppModel } from '~/models/app'
import { Instance } from 'mobx-state-tree'

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
    return this.props as IInjectedProps
  }

  componentDidMount() {
    likely.initiate()
  }

  render() {
    const { app } = this.injected
    return (
      <Container>
        <Label>Похвастаться 🤘</Label>
        <Buttons>
          <div className="likely">
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

export default inject('app')(observer(Share))

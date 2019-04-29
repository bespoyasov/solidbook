import * as React from 'react'
import { Component } from 'react'
import likely from 'ilyabirman-likely'
import { Container, Buttons, Label } from './style'

const networks = [
  { name: 'twitter', action: 'Твитнуть' },
  { name: 'vkontakte', action: 'Поделиться' },
  { name: 'facebook', action: 'Зафейсбучить' },
  { name: 'telegram', action: 'Телеграмнуть' }
]

class Share extends Component {
  componentDidMount() {
    likely.initiate()
  }

  render() {
    return (
      <Container>
        <Label>Похвастаться 🤘</Label>
        <Buttons>
          <div className="likely">
            {networks.map(({ name, action }) => (
              <div key={name} className={name} data-title="Мой счёт 800 из 1000 очков на SOLID-BOOK">
                {action}
              </div>
            ))}
          </div>
        </Buttons>
      </Container>
    )
  }
}

export default Share

import * as React from 'react'
import { Component } from 'react'
import likely from 'ilyabirman-likely'
import { Container, Buttons, Label } from './style'

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
            <div className="twitter">Твитнуть</div>
            <div className="vkontakte">Поделиться</div>
            <div className="facebook">Зафейсбучить</div>
            <div className="telegram">Телеграмнуть</div>
          </div>
        </Buttons>
      </Container>
    )
  }
}

export default Share

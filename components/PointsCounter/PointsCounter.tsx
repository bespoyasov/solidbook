import * as React from 'react'
import { Component } from 'react'
import Share from '~/components/Share'
import { Container, Big, Counter, Label, ShareContainer } from './style'
import { inject, observer } from 'mobx-react'
import { AppModel } from '~/models/app'
import { Instance } from 'mobx-state-tree'

interface IInjectedProps {
  app: Instance<typeof AppModel>
}

class PointsCounter extends Component {
  get injected() {
    return this.props as IInjectedProps
  }

  render() {
    const { app } = this.injected
    return (
      <Container>
        <Counter>
          <Label>Ваш текущий счёт:</Label>
          <Big>{app.userScore}</Big> / {app.totalScore}
        </Counter>

        <ShareContainer>
          <Share />
        </ShareContainer>
      </Container>
    )
  }
}

export default inject('app')(observer(PointsCounter))

import React, { Component } from 'react'
import { Instance } from 'mobx-state-tree'
import { inject, observer } from 'mobx-react'
import { AppModel } from '~/models/app'
import { Share } from '~/components/Share'
import { Container, Big, Counter, Label, ShareContainer } from './style'

interface IInjectedProps {
  app: Instance<typeof AppModel>
}

class BasePointsCounter extends Component {
  public root: HTMLElement
  public animationTimeout: number
  public updatesCount: number = 0

  get injected() {
    return this.props as IInjectedProps
  }

  componentDidUpdate() {
    // don't show animation on initial update when mobx injects props
    this.updatesCount++
    if (this.updatesCount < 2) return

    this.root.classList.add('is-bouncing')
    this.animationTimeout = window.setTimeout(() => this.root.classList.remove('is-bouncing'), 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.animationTimeout)
  }

  render() {
    const { app } = this.injected
    return (
      <Container ref={node => (this.root = node)}>
        <Counter>
          <Label>Ваш счёт:</Label>
          <Big>{app.userScore}</Big> / {app.totalScore}
        </Counter>

        {app.userScore > 0 && (
          <ShareContainer>
            <Share />
          </ShareContainer>
        )}
      </Container>
    )
  }
}

export const PointsCounter = inject('app')(observer(BasePointsCounter))

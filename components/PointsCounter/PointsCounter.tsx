import * as React from 'react'
import { PureComponent } from 'react'
import { Container, Big, Share } from './style'

class Navigation extends PureComponent {
  render() {
    return (
      <Container>
        <Big>
          810<span>✨</span>
        </Big>
        <span>из 1000</span>

        <Share>
          <img src="/static/i-twitter.svg" alt="Твитнуть" />
        </Share>
      </Container>
    )
  }
}

export default Navigation

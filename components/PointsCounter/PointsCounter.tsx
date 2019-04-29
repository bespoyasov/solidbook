import * as React from 'react'
import { PureComponent } from 'react'
import Share from '~/components/Share'
import { Container, Big, Counter, Label, ShareContainer } from './style'

class PointsCounter extends PureComponent {
  render() {
    return (
      <Container>
        <Counter>
          <Label>Ваш текущий счёт:</Label>
          <Big>800</Big> / 1000
        </Counter>

        <ShareContainer>
          <Share />
        </ShareContainer>
      </Container>
    )
  }
}

export default PointsCounter

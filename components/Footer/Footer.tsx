import * as React from 'react'
import { PureComponent } from 'react'
import Center from '../layouts/Center'
import { Wrapper, Container } from './style'

class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Center>
          <Container>
            <span>
              <a href="https://bespoyasov.ru">Саша Беспоясов</a> и{' '}
              <a href="https://github.com/dex157">Артём Самофалов</a>
            </span>

            <span>2019</span>
          </Container>
        </Center>
      </Wrapper>
    )
  }
}

export default Footer

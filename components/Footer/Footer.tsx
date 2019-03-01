import * as React from 'react'
import { PureComponent } from 'react'
import Center from '../layouts/Center'
import FooterWrapper from './style'

class Footer extends PureComponent {
  render() {
    return (
      <FooterWrapper>
        <Center>А тут будет футер</Center>
      </FooterWrapper>
    )
  }
}

export default Footer

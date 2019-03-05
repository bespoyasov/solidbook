import * as React from 'react'
import { PureComponent } from 'react'
import Logo from '../Logo'
import HeaderWrapper from './style'

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    )
  }
}

export default Header

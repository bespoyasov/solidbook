import * as React from 'react'
import { PureComponent } from 'react'
import Logo from '../Logo'
import HeaderWrapper from './style'

type Props = {}

class Header extends PureComponent<Props> {
  static defaultProps = {}
  render() {
    return (
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    )
  }
}

export default Header

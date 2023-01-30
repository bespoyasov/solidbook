import React, { PureComponent } from 'react'

import { HeaderWrapper } from './style'
import { Logo } from '../Logo'

export class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    )
  }
}

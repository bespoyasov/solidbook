import React, { PureComponent } from 'react'

import { Logo } from '../Logo'
import { HeaderWrapper } from './style'

export class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    )
  }
}

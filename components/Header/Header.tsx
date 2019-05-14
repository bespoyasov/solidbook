import * as React from 'react'
import { PureComponent } from 'react'
import Logo from '../Logo'
import HeaderWrapper from './style'

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        Это назавершённая бета-версия, не для публичного использования. Пока что :–)
        <br />
        Релиз — совсем скоро, не переключайтесь
      </HeaderWrapper>
    )
  }
}

export default Header

import * as React from 'react'
import { PureComponent } from 'react'
import Link from 'next/link'
import LogoWrapper from './style'

class Logo extends PureComponent {
  render() {
    return (
      <LogoWrapper>
        <Link href="/">
          <a>SOLID</a>
        </Link>
      </LogoWrapper>
    )
  }
}

export default Logo

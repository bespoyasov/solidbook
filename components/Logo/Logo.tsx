import * as React from 'react'
import { PureComponent } from 'react'
import Link from 'next/link'
import LogoWrapper from './style'
import Image from './Image'

class Logo extends PureComponent {
  render() {
    return (
      <LogoWrapper>
        <Link href="/">
          <a>
            <Image />
          </a>
        </Link>
      </LogoWrapper>
    )
  }
}

export default Logo

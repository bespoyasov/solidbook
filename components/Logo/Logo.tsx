import React, { PureComponent } from 'react'
import Link from 'next/link'
import { LogoWrapper } from './style'
import { Image } from './Image'

export class Logo extends PureComponent {
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

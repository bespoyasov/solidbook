import Link from 'next/link'
import React, { PureComponent } from 'react'

import { Image } from './Image'
import { LogoWrapper } from './style'

export class Logo extends PureComponent {
  render() {
    return (
      <LogoWrapper>
        <Link href="/">
          <Image />
        </Link>
      </LogoWrapper>
    )
  }
}

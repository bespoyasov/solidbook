import * as React from 'react'
import { PureComponent } from 'react'
import Link from 'next/link'
import LogoWrapper from './style'

type Props = {}

class Logo extends PureComponent<Props> {
  static defaultProps = {}
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

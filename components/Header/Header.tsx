import * as React from 'react'
import { PureComponent } from 'react'
import Link from 'next/link'
import HeaderWrapper from './style'

type Props = {}

class Header extends PureComponent<Props> {
  static defaultProps = {}
  render() {
    return (
      <HeaderWrapper>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </HeaderWrapper>
    )
  }
}

export default Header

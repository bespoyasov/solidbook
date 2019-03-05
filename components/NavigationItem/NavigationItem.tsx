import * as React from 'react'
import { PureComponent } from 'react'
import Link from 'next/link'
import Container from './style'

interface Props {
  href: string
  children: React.ReactChild
}

class NavigationItem extends PureComponent<Props> {
  render() {
    const { href, children } = this.props
    return (
      <Container className={href === '/' ? 'active' : ''}>
        <Link href={href}>
          <a>{children}</a>
        </Link>
      </Container>
    )
  }
}

export default NavigationItem

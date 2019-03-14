import * as React from 'react'
import clsx from 'clsx'
import { PureComponent } from 'react'
import Link from 'next/link'
import Container from './style'

interface Props {
  href: string
  depth: number
  children: React.ReactChild
}

class NavigationItem extends PureComponent<Props> {
  static defaultProps = {
    depth: 1
  }

  render() {
    const { href, children, depth } = this.props
    return (
      // TODO: replace stub (href === '/srp/info') with real functionality
      <Container className={clsx({ active: href === '/srp/intro' }, { deep: depth > 1 })}>
        <Link href={href}>
          <a>{children}</a>
        </Link>
      </Container>
    )
  }
}

export default NavigationItem

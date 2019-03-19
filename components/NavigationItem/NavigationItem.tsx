import * as React from 'react'
import clsx from 'clsx'
import { PureComponent } from 'react'
import Link from 'next/link'
import Container from './style'

interface Props {
  href: string
  depth: number
  root?: boolean
  active?: boolean
  completed?: boolean
  children: React.ReactChild
}

class NavigationItem extends PureComponent<Props> {
  static defaultProps = {
    depth: 1
  }

  render() {
    const { href, children, root, depth, active, completed } = this.props
    const deep = depth > 1

    return (
      <Container className={clsx({ root }, { deep }, { active }, { completed })}>
        <Link href={href}>
          <a>{children}</a>
        </Link>
      </Container>
    )
  }
}

export default NavigationItem

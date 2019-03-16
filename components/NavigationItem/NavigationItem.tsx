import * as React from 'react'
import clsx from 'clsx'
import { PureComponent } from 'react'
import { withRouter, SingletonRouter } from 'next/router'
import Link from 'next/link'
import Container from './style'

interface Props {
  href: string
  depth: number
  children: React.ReactChild
  router?: SingletonRouter
}

class NavigationItem extends PureComponent<Props> {
  static defaultProps = {
    depth: 1
  }

  render() {
    const { href, children, depth, router } = this.props

    const deep = depth > 1
    const completed = false

    const active = router.pathname === href
    const contains = router.pathname.includes(href) && !active

    return (
      <Container className={clsx({ active }, { deep }, { completed }, { 'contains-active': contains })}>
        <Link href={href}>
          <a>{children}</a>
        </Link>
      </Container>
    )
  }
}

export default withRouter(NavigationItem)

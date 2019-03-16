import * as React from 'react'
import clsx from 'clsx'
import { PureComponent } from 'react'
import { withRouter, SingletonRouter } from 'next/router'
import Link from 'next/link'
import Container from './style'

interface Props {
  href: string
  depth?: number
  children: React.ReactChild
  router?: SingletonRouter
}

class NavigationItem extends PureComponent<Props> {
  static defaultProps = {
    depth: 1
  }

  render() {
    const { href, children, depth, router } = this.props
    const { pathname } = router

    const deep = depth > 1
    const completed = false

    const indexRoute = href === '/'
    const activePage = pathname === href
    const contains = !activePage && !indexRoute && pathname.includes(href)

    return (
      <Container className={clsx({ active: activePage }, { deep }, { completed }, { 'contains-active': contains })}>
        <Link href={href}>
          <a>{children}</a>
        </Link>
      </Container>
    )
  }
}

export default withRouter(NavigationItem)

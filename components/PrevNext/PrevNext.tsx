import { WithRouterProps } from 'next/dist/client/with-router'
import Link from 'next/link'
import { withRouter, SingletonRouter } from 'next/router'
import React, { PureComponent } from 'react'

import { routes, RouteShape } from '../Navigation/routes'
import { Container, Column } from './style'

function flattenRoutes(routesToFlat: RouteShape[]): RouteShape[] {
  return routesToFlat.reduce((list: RouteShape[], route: RouteShape) => {
    if (!route.subnav) return [...list, route]
    return [...list, route, ...flattenRoutes(route.subnav.slice(1))]
  }, [])
}

interface PrevNextOwnProps {
  router?: SingletonRouter
}

type PrevNextProps = WithRouterProps & PrevNextOwnProps

class BasePrevNext extends PureComponent<PrevNextProps> {
  flatRoutes = flattenRoutes(routes)

  get activeIndex(): number {
    const { router } = this.props
    return this.flatRoutes.findIndex((route) => route.link === router.pathname)
  }

  get prev(): RouteShape {
    return this.flatRoutes[this.activeIndex - 1]
  }

  get next(): RouteShape {
    return this.flatRoutes[this.activeIndex + 1]
  }

  render() {
    return (
      <Container>
        <Column>{!!this.prev && <Link href={this.prev.link}>{this.prev.name}</Link>}</Column>
        <Column>{!!this.next && <Link href={this.next.link}>{this.next.name}</Link>}</Column>
      </Container>
    )
  }
}

export const PrevNext = withRouter(BasePrevNext)

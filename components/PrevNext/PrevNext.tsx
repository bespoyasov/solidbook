import * as React from 'react'
import Link from 'next/link'
import { withRouter, SingletonRouter } from 'next/router'
import { PureComponent } from 'react'
import { Container, Column } from './style'
import routes, { RouteShape } from '../Navigation/routes'

function flattenRoutes(routes: RouteShape[]): RouteShape[] {
  return routes.reduce((list: RouteShape[], route: RouteShape) => {
    if (!route.subnav) return [...list, route]
    return [...list, route, ...flattenRoutes(route.subnav.slice(1))]
  }, [])
}

interface Props {
  router?: SingletonRouter
}

class PrevNext extends PureComponent<Props> {
  flatRoutes = flattenRoutes(routes)

  get activeIndex(): number {
    return this.flatRoutes.findIndex(route => route.link === this.props.router.pathname)
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
        <Column>
          {!!this.prev && (
            <Link href={this.prev.link}>
              <a>{this.prev.name}</a>
            </Link>
          )}
        </Column>
        <Column>
          {!!this.next && (
            <Link href={this.next.link}>
              <a>{this.next.name}</a>
            </Link>
          )}
        </Column>
      </Container>
    )
  }
}

export default withRouter(PrevNext)

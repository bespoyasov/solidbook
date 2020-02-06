import * as React from 'react'
import { PureComponent } from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import { withRouter, SingletonRouter } from 'next/router'
import Link from 'next/link'
import routes, { RouteShape } from '../Navigation/routes'
import { Container, Column } from './style'

function flattenRoutes(routes: RouteShape[]): RouteShape[] {
  return routes.reduce((list: RouteShape[], route: RouteShape) => {
    if (!route.subnav) return [...list, route]
    return [...list, route, ...flattenRoutes(route.subnav.slice(1))]
  }, [])
}

interface PrevNextOwnProps {
  router?: SingletonRouter
}

type PrevNextProps = WithRouterProps & PrevNextOwnProps

class PrevNext extends PureComponent<PrevNextProps> {
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

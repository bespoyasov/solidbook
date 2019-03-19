import * as React from 'react'
import { PureComponent } from 'react'
import { withRouter, SingletonRouter } from 'next/router'
import PointsCounter from '../PointsCounter'
import { Nav, Section, SubSection } from './style'
import NavigationItem from '../NavigationItem'
import routes from './routes'

interface Props {
  router?: SingletonRouter
}

class Navigation extends PureComponent<Props> {
  render() {
    const { pathname } = this.props.router

    return (
      <Nav>
        <PointsCounter />

        <Section>
          <h3>Содержание</h3>
          <ul>
            {routes.map(({ link, name, root, subnav }) => (
              <li key={link}>
                <NavigationItem href={link} section={root}>
                  {name}
                </NavigationItem>

                {!!subnav && pathname.includes(root) && (
                  <SubSection>
                    <ul>
                      {subnav.map(({ link, name }) => (
                        <li key={link}>
                          <NavigationItem href={link} depth={2}>
                            {name}
                          </NavigationItem>
                        </li>
                      ))}
                    </ul>
                  </SubSection>
                )}
              </li>
            ))}
          </ul>
        </Section>
      </Nav>
    )
  }
}

export default withRouter(Navigation)

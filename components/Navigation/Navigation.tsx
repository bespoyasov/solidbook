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
  isActive = link => {
    return this.props.router.pathname === link
  }

  isRoot = section => {
    return this.props.router.pathname.includes(section)
  }

  render() {
    return (
      <Nav>
        <PointsCounter />

        <Section>
          <h3>Содержание</h3>
          <ul>
            {routes.map(({ link, name, section, subnav }) => {
              const root = this.isRoot(section)

              return (
                <li key={link}>
                  <NavigationItem href={link} root={root} active={this.isActive(link)}>
                    {name}
                  </NavigationItem>

                  {!!subnav && root && (
                    <SubSection>
                      <ul>
                        {subnav.map(({ link, name }) => (
                          <li key={link}>
                            <NavigationItem href={link} active={this.isActive(link)} depth={2}>
                              {name}
                            </NavigationItem>
                          </li>
                        ))}
                      </ul>
                    </SubSection>
                  )}
                </li>
              )
            })}
          </ul>
        </Section>
      </Nav>
    )
  }
}

export default withRouter(Navigation)

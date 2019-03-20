import * as React from 'react'
import { PureComponent } from 'react'
import { withRouter, SingletonRouter } from 'next/router'
import PointsCounter from '../PointsCounter'
import { Nav, Section, SubSection } from './style'
import NavigationItem from '../NavigationItem'
import routes from './routes'
import { countOccurencies } from '../../lib'

interface Props {
  router?: SingletonRouter
}

class Navigation extends PureComponent<Props> {
  isIndex = (link: string): boolean => link === '/'

  isActive = (link: string): boolean => this.props.router.pathname === link

  isSectionRoot = (link: string): boolean => countOccurencies(/\//g, link) === 1

  containsActive = (link: string): boolean => {
    return this.props.router.pathname.includes(link) && this.isSectionRoot(link) && !this.isIndex(link)
  }

  render() {
    return (
      <Nav>
        <PointsCounter />

        <Section>
          <h3>Содержание</h3>
          <ul>
            {routes.map(({ link, name, subnav }) => {
              const containsActive = this.containsActive(link)

              return (
                <li key={link}>
                  <NavigationItem href={link} containsActive={containsActive} active={this.isActive(link)}>
                    {name}
                  </NavigationItem>

                  {!!subnav && containsActive && (
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

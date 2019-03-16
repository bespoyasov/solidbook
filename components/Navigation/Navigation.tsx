import * as React from 'react'
import { PureComponent } from 'react'
import PointsCounter from '../PointsCounter'
import { Nav, Section, SubSection } from './style'
import NavigationItem from '../NavigationItem'
import routes from './routes'

class Navigation extends PureComponent {
  render() {
    return (
      <Nav>
        <PointsCounter />

        <Section>
          <h3>Содержание</h3>
          <ul>
            {routes.map(({ link, name, subnav }) => (
              <li key={link}>
                <NavigationItem href={link}>{name}</NavigationItem>

                {!!subnav && (
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

export default Navigation

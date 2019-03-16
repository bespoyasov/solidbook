import * as React from 'react'
import { PureComponent } from 'react'
import PointsCounter from '../PointsCounter'
import { Nav, Section, SubSection } from './style'
import NavigationItem from '../NavigationItem'

type LinkShape = {
  link: string
  name: string
  subnav?: LinkShape[]
}

const link = (link: string, name: string, subnav?: LinkShape[]): LinkShape => ({
  link,
  name,
  subnav
})

const routes = [
  link('/', 'Введение'),
  link('/srp', 'Принцип единственной ответственности', [
    link('/srp/intro', 'Введение и понятия'),
    link('/srp/in-ideal-world', 'Примеры из идеального мира'),
    link('/srp/in-real-life', 'Примеры из реальной жизни'),
    link('/srp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    link('/srp/antipatterns', 'Антипаттерны'),
    link('/srp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  link('/open-closed', 'Принцип открытости и закрытости'),
  link('/liskov-substitution', 'Принцип подстановки Барбары Лисков'),
  link('/isp', 'Принцип разделения интерфейса'),
  link('/di', 'Принцип инверсии зависимостей')
]

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

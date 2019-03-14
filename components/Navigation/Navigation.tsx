import * as React from 'react'
import { PureComponent } from 'react'
import PointsCounter from '../PointsCounter'
import { Nav, Section, SubSection } from './style'
import NavigationItem from '../NavigationItem'

class Navigation extends PureComponent {
  render() {
    return (
      <Nav>
        <PointsCounter />

        <Section>
          <h3>Содержание</h3>
          <ul>
            <li>
              <NavigationItem href="/">Введение</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/srp/intro">Принцип единственной ответственности</NavigationItem>

              <SubSection>
                <ul>
                  <li>
                    <NavigationItem href="/" depth={2}>
                      Введение и понятия
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/" depth={2}>
                      Примеры из идеального мира
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/" depth={2}>
                      Примеры из реальной жизни
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/" depth={2}>
                      Шаблоны проектирования и приёмы рефакторинга
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/" depth={2}>
                      Антипаттерны
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/" depth={2}>
                      Ограничения и подводные камни
                    </NavigationItem>
                  </li>
                </ul>
              </SubSection>
            </li>
            <li>
              <NavigationItem href="/open-closed/intro">Принцип открытости и закрытости</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/liskov-substitution/intro">Принцип подстановки Барбары Лисков</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/isp/intro">Принцип разделения интерфейса</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/di/intro">Принцип инверсии зависимостей</NavigationItem>
            </li>
          </ul>
        </Section>
      </Nav>
    )
  }
}

export default Navigation

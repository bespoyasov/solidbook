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
              <NavigationItem href="/srp">Принцип единственной ответственности</NavigationItem>

              <SubSection>
                <ul>
                  <li>
                    <NavigationItem href="/srp/intro" depth={2}>
                      Введение и понятия
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/srp/in-ideal-world" depth={2}>
                      Примеры из идеального мира
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/srp/in-real-life" depth={2}>
                      Примеры из реальной жизни
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/srp/patterns" depth={2}>
                      Шаблоны проектирования и приёмы рефакторинга
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/srp/antipatterns" depth={2}>
                      Антипаттерны
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/srp/limits-and-caveats" depth={2}>
                      Ограничения и подводные камни
                    </NavigationItem>
                  </li>
                </ul>
              </SubSection>
            </li>
            <li>
              <NavigationItem href="/open-closed">Принцип открытости и закрытости</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/liskov-substitution">Принцип подстановки Барбары Лисков</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/isp">Принцип разделения интерфейса</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/di">Принцип инверсии зависимостей</NavigationItem>
            </li>
          </ul>
        </Section>
      </Nav>
    )
  }
}

export default Navigation

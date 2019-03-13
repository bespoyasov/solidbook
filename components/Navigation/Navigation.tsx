import * as React from 'react'
import { PureComponent } from 'react'
import PointsCounter from '../PointsCounter'
import { Nav, Section } from './style'
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
            </li>
            <li>
              <NavigationItem href="/open-closed/intro">Принцип открытости и закрытости</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/substliskov-substitution/introitution">
                Принцип подстановки Барбары Лисков
              </NavigationItem>
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

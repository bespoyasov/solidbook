import * as React from 'react'
import { PureComponent } from 'react'
import PointsCounter from '../PointsCounter'
import { Nav, NavSection } from './style'
import NavigationItem from '../NavigationItem'

class Navigation extends PureComponent {
  render() {
    return (
      <Nav>
        <PointsCounter />

        <NavSection>
          <h3>Содержание</h3>
          <ul>
            <li>
              <NavigationItem href="/">Введение</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/">Принцип единственной ответственности</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/">Принцип открытости и закрытости</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/">Принцип подстановки Барбары Лисков</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/">Принцип разделения интерфейса</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/">Принцип инверсии зависимостей</NavigationItem>
            </li>
          </ul>
        </NavSection>
      </Nav>
    )
  }
}

export default Navigation

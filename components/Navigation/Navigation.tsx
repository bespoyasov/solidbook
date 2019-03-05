import * as React from 'react'
import { PureComponent } from 'react'
import Link from 'next/link'
import PointsCounter from '../PointsCounter'
import { Nav, NavSection } from './style'

class Navigation extends PureComponent {
  render() {
    return (
      <Nav>
        <PointsCounter />

        <NavSection>
          <h3>Содержание</h3>
          <ul>
            <li>
              <Link href="/">
                <a>Введение</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Принцип единственной ответственности</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Принцип открытости и закрытости</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Принцип подстановки Барбары Лисков</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Принцип разделения интерфейса</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Принцип инверсии зависимостей</a>
              </Link>
            </li>
          </ul>
        </NavSection>
      </Nav>
    )
  }
}

export default Navigation

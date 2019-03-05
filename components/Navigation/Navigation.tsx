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

              <SubSection>
                <ul>
                  <li>
                    <NavigationItem href="/#about">О чём это?</NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/#why-oop">Почему ООП?</NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/#what-principles">О каких принципах пойдёт речь?</NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/#whats-the-plan">Какой план?</NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/#links">Материалы к разделу</NavigationItem>
                  </li>
                </ul>
              </SubSection>
            </li>
            <li>
              <NavigationItem href="/single-responsibility">Принцип единственной ответственности</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/open-closed">Принцип открытости и закрытости</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/substitution">Принцип подстановки Барбары Лисков</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/interface-segregation">Принцип разделения интерфейса</NavigationItem>
            </li>
            <li>
              <NavigationItem href="/dependency-inversion">Принцип инверсии зависимостей</NavigationItem>
            </li>
          </ul>
        </Section>
      </Nav>
    )
  }
}

export default Navigation

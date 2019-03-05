import * as React from 'react'
import { PureComponent } from 'react'
import PointsCounter from '../PointsCounter'
import Nav from './style'

class Navigation extends PureComponent {
  render() {
    return (
      <Nav>
        <PointsCounter />
      </Nav>
    )
  }
}

export default Navigation

import React, { PureComponent } from 'react'
import TypografReactNode from './TypografReactNode'

class Paragraph extends PureComponent {
  render() {
    const { children } = this.props
    return TypografReactNode.process(<p>{children}</p>)
  }
}

export default Paragraph

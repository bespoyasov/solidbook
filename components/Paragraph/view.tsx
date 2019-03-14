import React, { PureComponent } from 'react'
import typografReactNode from './typografReactNode'

class Paragraph extends PureComponent {
  render() {
    const { children } = this.props
    return typografReactNode(<p>{children}</p>)
  }
}

export default Paragraph

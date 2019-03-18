import React, { PureComponent } from 'react'
import TypografReactNode from '~/domain/typografy/reactChildren'

class Paragraph extends PureComponent {
  render() {
    const { children } = this.props
    return TypografReactNode.processElement(<p>{children}</p>)
  }
}

export default Paragraph

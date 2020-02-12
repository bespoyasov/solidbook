import React, { PureComponent, ReactNode } from 'react'
import TypografReactNode from '~/domain/typografy/reactChildren'

class Paragraph extends PureComponent<{ children: ReactNode }> {
  render() {
    const { children } = this.props
    return TypografReactNode.processElement(<p>{children}</p>)
  }
}

export default Paragraph

import React, { PureComponent } from 'react'
import { TypografyReactChildren as TypografReactNode } from '~/domain/typografy/reactChildren'

export class Paragraph extends PureComponent {
  render() {
    const { children } = this.props
    return TypografReactNode.processElement(<p>{children}</p>)
  }
}

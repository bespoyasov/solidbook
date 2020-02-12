import React, { PureComponent } from 'react'
import { AbbrWrapper } from './style'

type Props = {
  title?: string
  children?: React.ReactNode
}

export class Abbr extends PureComponent<Props> {
  static defaultProps = {}

  render() {
    const { title, children } = this.props
    return <AbbrWrapper title={title}>{children}</AbbrWrapper>
  }
}

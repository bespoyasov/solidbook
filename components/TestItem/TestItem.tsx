import * as React from 'react'
import { PureComponent } from 'react'
import { Item } from './style'

type Props = {
  children?: React.ReactNode
  name: string
  value: string
}

class TestItem extends PureComponent<Props> {
  static defaultProps = {}

  render() {
    const { children, name, value } = this.props

    return (
      <Item>
        <input type="checkbox" name={name} value={value} />
        <div className="indicator" />
        <span>{children}</span>
      </Item>
    )
  }
}

export default TestItem

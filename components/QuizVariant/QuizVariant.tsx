import * as React from 'react'
import { PureComponent } from 'react'
import VisuallyHidden from 'components/VisuallyHidden'
import { Item } from './style'

type Props = {
  children?: React.ReactNode
  name: string
  value: string | number
  selected: boolean
}

class TestItem extends PureComponent<Props> {
  static defaultProps = {}

  render() {
    const { children, name, value, selected } = this.props

    return (
      <Item className={selected ? 'selected' : ''}>
        <VisuallyHidden>
          <input type="checkbox" name={name} value={value} defaultChecked={selected} />
        </VisuallyHidden>

        <div className="indicator" />
        <span>{children}</span>
      </Item>
    )
  }
}

export default TestItem

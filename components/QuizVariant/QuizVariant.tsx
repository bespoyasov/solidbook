import * as React from 'react'
import { PureComponent } from 'react'
import clsx from 'clsx'
import VisuallyHidden from 'components/VisuallyHidden'
import { Item } from './style'

type Props = {
  name: string
  value: string | number
  selected?: boolean
  correct?: boolean
  children?: React.ReactNode
}

class TestItem extends PureComponent<Props> {
  static defaultProps = {}

  render() {
    const { children, name, value, selected, correct } = this.props

    return (
      <Item className={clsx({ selected }, { correct })}>
        <VisuallyHidden>
          <input type="checkbox" name={name} value={value} defaultChecked={selected} />
        </VisuallyHidden>

        <span>{children}</span>
      </Item>
    )
  }
}

export default TestItem

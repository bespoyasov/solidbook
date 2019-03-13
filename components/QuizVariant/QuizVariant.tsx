import * as React from 'react'
import { PureComponent } from 'react'
import clsx from 'clsx'
import VisuallyHidden from 'components/VisuallyHidden'
import { Item } from './style'

type Props = {
  name: string
  value: string | number
  completed: boolean
  selected?: boolean
  correct?: boolean
  children?: React.ReactNode
}

class QuizVariant extends PureComponent<Props> {
  static defaultProps = {
    completed: false
  }

  render() {
    const { children, name, value, selected, completed, correct } = this.props

    return (
      <Item className={clsx({ selected }, { correct }, { completed })}>
        <VisuallyHidden>
          <input type="checkbox" name={name} value={value} defaultChecked={selected} />
        </VisuallyHidden>

        <span>{children}</span>
      </Item>
    )
  }
}

export default QuizVariant

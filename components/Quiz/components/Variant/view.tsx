import * as React from 'react'
import { PureComponent } from 'react'
import clsx from 'clsx'
import VisuallyHidden from '~/components/VisuallyHidden'
import { Label, Description, Item } from './style'

type IProps = {
  completed: boolean
  selected: boolean
  correct: boolean
  name: string
  index: number
  variant: {
    text: React.ReactNode
    description?: React.ReactNode
  }
  onToggleAnswer: (value: number) => void
}

class QuizVariant extends PureComponent<IProps> {
  handleChange = () => {
    const { index, onToggleAnswer } = this.props

    onToggleAnswer(index)
  }

  render() {
    const {
      completed,
      selected,
      correct,
      index,
      name,
      variant: { text, description }
    } = this.props

    return (
      <Item>
        <Label className={clsx({ selected, correct, completed })}>
          <VisuallyHidden>
            <input
              type="checkbox"
              name={name}
              value={index}
              checked={selected}
              disabled={completed}
              onChange={this.handleChange}
            />
          </VisuallyHidden>

          <div>{text}</div>
        </Label>
        {!!description && completed && <Description>{description}</Description>}
      </Item>
    )
  }
}

export default QuizVariant

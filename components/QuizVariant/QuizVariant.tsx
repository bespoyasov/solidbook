import * as React from 'react'
import { PureComponent } from 'react'
import clsx from 'clsx'
import VisuallyHidden from '~/components/VisuallyHidden'
import { Label, Description, Item } from './style'
import { QuizVariantData } from './types'

type Props = {
  question: string
  completed: boolean
  variant: QuizVariantData
}

class QuizVariant extends PureComponent<Props> {
  static defaultProps = {
    completed: false
  }

  render() {
    const { question, completed, variant } = this.props
    const { selected, correct, main, description } = variant

    return (
      <Item>
        <Label className={clsx({ selected }, { correct }, { completed })}>
          <VisuallyHidden>
            <input type="checkbox" name={question} value={main} defaultChecked={selected} disabled={completed} />
          </VisuallyHidden>

          <span>{main}</span>
        </Label>
        {!!description && completed && <Description>{description}</Description>}
      </Item>
    )
  }
}

export default QuizVariant

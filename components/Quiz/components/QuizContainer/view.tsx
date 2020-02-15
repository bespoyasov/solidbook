import { observer } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import React, { Component } from 'react'

import { Container, Heading } from './style'

import { Button } from '~/components/Button'
import { Variant } from '~/components/Quiz/components/Variant'
import { IVariant } from '~/components/Quiz/quizzes/IQuiz'
import { Quiz as QuizModel } from '~/models/quiz'

interface IProps {
  quizModel: Instance<typeof QuizModel>
  name: string
  completed?: boolean
  question: React.ReactNode
  variants: IVariant[]
}

class BaseQuizContainer extends Component<IProps> {
  static defaultProps = {
    completed: false,
    variants: []
  }

  toggleAnswer = (value: number) => {
    const { quizModel } = this.props
    quizModel.toggleAnswer(value)
  }

  render() {
    const { quizModel, question, variants, name } = this.props

    return (
      <Container>
        <Heading>{question}</Heading>

        {variants.map((variant, index) => (
          <Variant
            name={name}
            selected={quizModel.answers.includes(index)}
            completed={quizModel.isComplete}
            correct={quizModel.isComplete && quizModel.isCorrect(index)}
            index={index}
            variant={variant}
            key={index}
            onToggleAnswer={this.toggleAnswer}
          />
        ))}

        <Button disabled={quizModel.answers.length === 0} onClick={() => quizModel.toggleComplete()} type="button">
          {quizModel.isComplete ? 'Пройти заново' : 'Проверить ответ'}
        </Button>
      </Container>
    )
  }
}

export const QuizContainer = observer(BaseQuizContainer)

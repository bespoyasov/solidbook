import * as React from 'react'
import { Component } from 'react'
import { Container, Heading } from './style'
import Variant from '~/components/Quiz/components/Variant'
import Button from '~/components/Button'
import QuizModel from '~/models/quiz'
import { Instance } from 'mobx-state-tree'
import { IVariant } from '../../quizzes/IQuiz'
import { observer } from 'mobx-react'

interface IProps {
  quizModel: Instance<typeof QuizModel>
  name: string
  completed?: boolean
  question: React.ReactNode
  variants: IVariant[]
}

class QuizContainer extends Component<IProps> {
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

export default observer(QuizContainer)

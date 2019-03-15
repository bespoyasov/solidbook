import * as React from 'react'
import { PureComponent } from 'react'
import QuizVariant, { QuizVariantData } from '~/components/QuizVariant'
import Button from '~/components/Button'
import { Container, Heading } from './style'

type Props = {
  question: string
  completed: boolean
  variants: QuizVariantData[]
}

class Quiz extends PureComponent<Props> {
  static defaultProps = {
    completed: false
  }

  render() {
    const { question, completed, variants } = this.props

    return (
      <Container>
        <Heading>{question}</Heading>

        {variants.map(variant => (
          <QuizVariant question={question} completed={completed} variant={variant} key={question} />
        ))}

        <Button type="button">{!completed ? 'Проверить ответ' : 'Пройти заново'}</Button>
      </Container>
    )
  }
}

export default Quiz

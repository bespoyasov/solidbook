import * as React from 'react'
import { PureComponent } from 'react'
import QuizVariant from '~/components/QuizVariant'
import Button from '~/components/Button'
import { Container, Heading } from './style'
import { QuizData } from './types'

class Quiz extends PureComponent<QuizData> {
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

import * as React from 'react'
import { PureComponent } from 'react'
import Abbr from '~/components/Formatters/Abbr'
import QuizVariant from '~/components/QuizVariant'
import Button from '~/components/Button'
import { Container, Heading, Description, Item } from './style'

type Props = {
  completed: boolean
}

class TestForm extends PureComponent<Props> {
  static defaultProps = {
    completed: false
  }

  render() {
    const { completed } = this.props

    return (
      <Container>
        <Heading>В чём главная причина того, что выбор формата данных вынесен в отдельный класс?</Heading>

        <Item>
          <QuizVariant name="srp-1" value={1} completed={completed} correct selected>
            Он не относится ни к форматированию данных, ни к подготовке их к экспорту. По <Abbr>SRP</Abbr> его следует
            держать отдельно от других сущностей
          </QuizVariant>
        </Item>

        <Item>
          <QuizVariant name="srp-1" value={2} completed={completed} selected>
            Потому что иначе код других классов сильно разрастается. Так без этого чтение и понимание становятся гораздо
            труднее
          </QuizVariant>
          {completed && (
            <Description>
              Да, но это лишь следствие основной причины — что выбор формата не относится ни к форматированию данных, ни
              к подготовке их к экспорту
            </Description>
          )}
        </Item>

        <Item>
          <QuizVariant name="srp-1" value={3} completed={completed}>
            Это удобнее с точки зрения управления зависимостями. В этом случае подключение функциональности выбора
            формата производится в одном месте
          </QuizVariant>
          {completed && (
            <Description>
              Да, но это следствие основной причины — выбор формата не относится ни к форматированию данных, ни к
              подготовке их к экспорту, поэтому правильно его вынести в отдельный модуль
            </Description>
          )}
        </Item>

        <Button type="button">{!completed ? 'Проверить ответ' : 'Пройти заново'}</Button>
      </Container>
    )
  }
}

export default TestForm

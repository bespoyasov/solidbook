import * as React from 'react'
import { PureComponent } from 'react'
import Abbr from 'components/Formatters/Abbr'
import QuizVariant from 'components/QuizVariant'
import { Container, Heading } from './style'

class TestForm extends PureComponent {
  render() {
    return (
      <Container>
        <Heading>В чём главная причина того, что выбор формата данных вынесен в отдельный класс?</Heading>
        <QuizVariant name="srp-1" value={1} selected>
          Он не относится ни к форматированию данных, ни к подготовке их к экспорту. По <Abbr>SRP</Abbr> его следует
          держать отдельно от других сущностей
        </QuizVariant>

        <QuizVariant name="srp-1" value={2}>
          Потому что иначе код других классов сильно разрастается. Так без этого чтение и понимание становятся гораздо
          труднее
        </QuizVariant>
        {/* (да, но это лишь следствие основной причины — что выбор формата не относится ни к форматированию данных, ни к подготовке их к экспорту) */}

        <QuizVariant name="srp-1" value={3}>
          Это удобнее с точки зрения управления зависимостями. В этом случае подключение функциональности выбора формата
          производится в одном месте
        </QuizVariant>
        {/* (да, но это следствие основной причины — выбор формата не относится ни к
          форматированию данных, ни к подготовке их к экспорту, поэтому правильно его вынести в отдельный модуль) */}
      </Container>
    )
  }
}

export default TestForm

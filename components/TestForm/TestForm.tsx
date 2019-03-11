import * as React from 'react'
import { PureComponent } from 'react'
import Abbr from 'components/Formatters/Abbr'
import TestItem from 'components/TestItem'
import { Container, Heading } from './style'

class TestForm extends PureComponent {
  render() {
    return (
      <Container>
        <Heading>В чём главная причина того, что выбор формата данных вынесен в отдельный класс?</Heading>
        <TestItem name="srp-1" value="a">
          Он не относится ни к форматированию данных, ни к подготовке их к экспорту. По <Abbr>SRP</Abbr> его следует
          держать отдельно от других сущностей
        </TestItem>
        <TestItem name="srp-1" value="b">
          Потому что иначе код других классов сильно разрастается. Так без этого чтение и понимание становятся гораздо
          труднее (да, но это лишь следствие основной причины — что выбор формата не относится ни к форматированию
          данных, ни к подготовке их к экспорту)
        </TestItem>
        <TestItem name="srp-1" value="c">
          Это удобнее с точки зрения управления зависимостями. В этом случае подключение функциональности выбора формата
          производится в одном месте (да, но это следствие основной причины — выбор формата не относится ни к
          форматированию данных, ни к подготовке их к экспорту, поэтому правильно его вынести в отдельный модуль)
        </TestItem>
      </Container>
    )
  }
}

export default TestForm

import * as React from 'react'
import { PureComponent } from 'react'
import Abbr from 'components/Formatters/Abbr'

class TestForm extends PureComponent {
  render() {
    return (
      <fieldset>
        <legend>В чём главная причина того, что выбор формата данных вынесен в отдельный класс?</legend>
        <label>
          <input name="question-1" type="checkbox" />
          <span>
            он не относится ни к форматированию данных, ни к подготовке их к экспорту. По <Abbr>SRP</Abbr> его следует
            держать отдельно от других сущностей
          </span>
        </label>
        <label>
          <input name="question-1" type="checkbox" />
          <span>
            потому что иначе код других классов сильно разрастается. Так без этого чтение и понимание становятся гораздо
            труднее (да, но это лишь следствие основной причины — что выбор формата не относится ни к форматированию
            данных, ни к подготовке их к экспорту)
          </span>
        </label>

        <label>
          <input name="question-1" type="checkbox" />
          <span>
            это удобнее с точки зрения управления зависимостями. В этом случае подключение функциональности выбора
            формата производится в одном месте (да, но это следствие основной причины — выбор формата не относится ни к
            форматированию данных, ни к подготовке их к экспорту, поэтому правильно его вынести в отдельный модуль)
          </span>
        </label>
      </fieldset>
    )
  }
}

export default TestForm

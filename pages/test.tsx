import MainLayout from 'components/layouts/MainLayout'
import Abbr from 'components/Formatters/Abbr'
import Code from 'components/Code'

export default () => (
  <MainLayout title="Принцип единой ответственности">
    <h1>Примеры из идеального мира</h1>
    <p>
      В идеальном мире каждый класс в коде решает одну и только одну задачу, а все задачи структурированы и разделены.
      Классы в этом случае дополняют друг друга, а их совокупность детально описывает систему.
    </p>
    <p>
      Допустим, у нас есть задача создать отчёт об активности пользователей и вывести его в нескольких вариантах: как{' '}
      строку <Abbr>HTML</Abbr> или <Abbr>TXT</Abbr>.
    </p>

    <section>
      <h2>Отчёт</h2>
      <p>
        Мы создадим класс <code>ReportExporter</code>, который будет заниматься только экспортом данных. Определять
        необходимый формат будет класс <code>FormatSelector</code>. А форматированием данных будут заниматься классы:{' '}
        <code>HtmlFormatter</code> и <code>TxtFormatter</code>.
      </p>
      <Code>{`// тип данных для отчёта
type ReportData = {
  content: string,
  date: Date,
  size: number,
}

// возможные форматы
enum ReportTypes {
  Html,
  Txt,
}

// класс, который занимается экспортом данных
class ReportExporter {
  name: string
  data: ReportData

  constructor(name: string, data: ReportData) {
    this.name = name
    this.data = data
  }

  export(reportType: ReportTypes): string {
    const formatter: IFormatter = new FormatSelector(reportType, this.data)
    return formatter.format()
  }
}
`}</Code>
    </section>

    <section>
      <h2>Форматы экспорта</h2>
      <p>
        В соответствии с <Abbr title="Single responsibility principle">SRP</Abbr> форматирование данных — это отдельная
        задача. Поэтому для преобразования данных отчёта в необходимый формат мы создадим отдельные классы.
      </p>
      <Code>{`interface IFormatter {
  data: ReportData;
  format(): string;
}

// класс для форматирования в HTML
class HtmlFormatter implements IFormatter {
  data: ReportData

  constructor(data: ReportData) {
    this.data = data
  }

  format(): string {
    // форматируем данные в HTML и возвращаем:
    return 'html string'
  }
}

// класс для форматирования в TXT
class TxtFormatter implements IFormatter {
  data: ReportData

  constructor(data: ReportData) {
    this.data = data
  }

  format(): string {
    // форматируем данные в TXT и возвращаем:
    return 'txt string'
  }
}`}</Code>
    </section>

    <section>
      <h2>Выбор формата</h2>
      <p>
        Принцип единой ответственности подсказывает, что выбор формата не входит ни в задачу форматирования данных, ни в
        задачу их подготовки. Поэтому существующие классы нам не подойдут.
      </p>
      <p>
        Создадим новый класс <code>FormatSelector</code>, который будет выбирать тип форматирования, в зависимости от
        настроек.
      </p>
      <Code>{`class FormatSelector {
  formatters = {
    ReportTypes.Html: HtmlFormatter,
    ReportTypes.Txt: TxtFormatter,
  }

  constructor(reportType: ReportTypes, data: ReportData) {
    const FormatterFactory = this.formatters[reportType]
    return new FormatterFactory(data)
  }
}`}</Code>
      <p>
        Таким образом <Abbr>SRP</Abbr> помогает разделить ответственность за различные задачи между сущностями и сделать
        это так, чтобы каждая сущность занималась одной задачей.
      </p>
    </section>

    <section>
      <h2>Вопросы</h2>
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
    </section>
  </MainLayout>
)

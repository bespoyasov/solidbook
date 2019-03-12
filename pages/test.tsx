import MainLayout from 'components/layouts/main'
import Abbr from 'components/Formatters/Abbr'
import Quiz from 'components/Quiz'
import Code from 'components/Code'

export const meta = {
  title: 'Принцип единой ответственности'
}

export default () => (
  <MainLayout meta={meta}>
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
      <Quiz />
    </section>
  </MainLayout>
)

import MainLayout from 'components/layouts/MainLayout'
import Abbr from 'components/Formatters/Abbr'

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

      <pre>
// тип данных для отчёта
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
      </pre>
    </section>
  </MainLayout>
)

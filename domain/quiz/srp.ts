export const quiz1 = {
  question: 'В чём главная причина того, что выбор формата данных вынесен в отдельный класс?',
  variants: [
    {
      id: 'srp1',
      main:
        'Он не относится ни к форматированию данных, ни к подготовке их к экспорту. По принципу единой ответственности его следует держать отдельно от других сущностей'
    },
    {
      id: 'srp2',
      main:
        'Потому что иначе код других классов сильно разрастается. Так без этого чтение и понимание становятся гораздо труднее',
      description:
        'Да, но это лишь следствие основной причины — что выбор формата не относится ни к форматированию данных, ни к подготовке их к экспорту'
    },
    {
      id: 'srp3',
      main:
        'Это удобнее с точки зрения управления зависимостями. В этом случае подключение функциональности выбора формата производится в одном месте',
      description:
        'Да, но это следствие основной причины — выбор формата не относится ни к форматированию данных, ни к подготовке их к экспорту, поэтому правильно его вынести в отдельный модуль'
    }
  ],
  checks: {
    srp1: {
      correct: true,
      selected: true
    },
    srp2: {
      correct: false,
      selected: true
    },
    srp3: {
      correct: false,
      selected: false
    }
  }
}

export const quiz2 = {
  question:
    'Допустим, нам требуется добавить ещё один формат вывода данных (CSV). Какой из вариантов внедрения будет соответствовать SRP?',
  variants: [
    {
      id: 'srp4',
      main: 'Вариант 1',
      code: `class CsvFormatter implements Formatter {
  data: ReportData

  constructor(data: ReportData) {
    this.data = data
  }

  format(): string {
    return 'csv string'
  }
}`
    },
    {
      id: 'srp5',
      main: 'Вариант 2',
      description: 'Не соответcтвует объявленному интерфейсу',
      code: `class CsvFormatter implements Formatter {
  format(data: ReportData): string {
    return 'csv string'
  }
}`
    },
    {
      id: 'srp6',
      main: 'Вариант 3',
      description: 'Второй аргумент не требуется, так как формат уже определён ранее',
      code: `class CsvFormatter implements Formatter {
  data: ReportData

  constructor(data: ReportData) {
    this.data = data
  }

  format(data: ReportData, reportType: ReportTypes): string {
    return 'csv string'
  }
}`
    }
  ],
  checks: {
    srp4: {
      correct: true,
      selected: true
    },
    srp5: {
      correct: false,
      selected: true
    },
    srp6: {
      correct: false,
      selected: false
    }
  }
}

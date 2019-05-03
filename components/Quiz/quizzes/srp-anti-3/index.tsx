import * as React from 'react'
import { IQuiz } from '../IQuiz'
import Question from './question.mdx'

const quiz: IQuiz = {
  name: 'srp-anti-3',
  question: <Question />,
  variants: [
    {
      text: 'Это неправильное распределение задач и размазывание ответственностей между сущностями'
    },
    {
      text: 'Оно ведёт к разрастанию контроллера и плохой тестируемости',
      description: 'Это следствие главной причины — смешения ответственностей между слоями'
    },
    {
      text: 'Затрудняет переиспользование модели из-за появления логики внутри неё',
      description: 'Тоже следствие основной причины'
    }
  ],
  meta: {
    correctAnswers: [0]
  }
}

export default quiz

import Question from './question.mdx'
import { IQuiz } from '../IQuiz'

export const dipPatterns3: IQuiz = {
  name: 'dip-patterns-3',
  question: <Question />,
  variants: [
    {
      text: '«Выворачивает» контроль за ходом программы, отдавая реакцию на событие наблюдаемому объекту'
    },
    {
      text: '«Выворачивает» контроль за ходом программы, отдавая реакцию на событие объекту-наблюдателю'
    },
    {
      text: '«Выворачивает» контроль за ходом программы, отдавая реакцию на событие корневому компоненту приложения'
    }
  ],
  meta: {
    correctAnswers: [1]
  }
}

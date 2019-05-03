import { IQuiz } from '../IQuiz'
import Question from './question.mdx'

const quiz: IQuiz = {
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
      text: '«Выворачивает» контроль за ходом программы, отдавая реакция на событие корневому компоненту приложения'
    }
  ],
  meta: {
    correctAnswers: [1]
  }
}

export default quiz

import { IQuiz } from '../IQuiz'
import Question from './question.mdx'

const quiz: IQuiz = {
  name: 'dip-patterns-5',
  question: <Question />,
  variants: [
    {
      text: '«Инвертирует» ход программы, отдавая контроль за выполнением методам конкретных классов-потомков'
    },
    {
      text: '«Инвертирует» ход программы, отдавая контроль за выполнением базовому абстрактному классу'
    },
    {
      text: '«Инвертирует» ход программы, отдавая контроль за выполнением корневому компоненту системы'
    }
  ],
  meta: {
    correctAnswers: [0]
  }
}

export default quiz

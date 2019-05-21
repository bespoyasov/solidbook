import { IQuiz } from '../IQuiz'

const quiz: IQuiz = {
  name: 'dip-intro-3',
  question: 'В чём заключается польза принципа инверсии зависимостей?',
  variants: [
    {
      text: 'Снижается сцепление модулей'
    },
    {
      text: 'Повышается сцепление модулей'
    },
    {
      text: 'Снижается связность модулей'
    },
    {
      text: 'Повышается связность модулей'
    }
  ],
  meta: {
    correctAnswers: [0, 3]
  }
}

export default quiz

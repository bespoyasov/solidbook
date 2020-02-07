import { IQuiz } from '../IQuiz'
import Question from './question.mdx'

export const lspPatterns1: IQuiz = {
  name: 'lsp-patterns-1',
  question: <Question />,
  variants: [
    {
      text: 'Позволяет строго описать и ограничить условия функционирования сущностей'
    },
    {
      text: 'Позволяет описать ожидания от результата работы конкретного метода'
    },
    {
      text: 'Избавляет от поведения, которого противоречит поведению базовой сущности'
    },
    { text: 'Помогает спроектировать сущность таким образом, чтобы её потомков можно было подменять друг другом' }
  ],
  meta: {
    correctAnswers: [0, 1, 2, 3]
  }
}

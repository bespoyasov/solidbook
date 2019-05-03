import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Variant3 from './variant-3.mdx'

const quiz: IQuiz = {
  name: 'lsp-ideal-1',
  question: <Question />,
  variants: [
    {
      text: 'Содержит и описывает в себе общую для обоих классов функциональность'
    },
    {
      text: 'Предотвращает противоречие в поведении базовой сущности и её потомков'
    },
    {
      text: <Variant3 />
    },
    {
      text: 'Позволяет композировать свойства без прямого наследования'
    }
  ],
  meta: {
    correctAnswers: [0, 1, 2, 3]
  }
}

export default quiz

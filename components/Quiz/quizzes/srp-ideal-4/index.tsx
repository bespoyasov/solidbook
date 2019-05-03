import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Variant1 from './variants/variant-1.mdx'
import Variant2 from './variants/variant-2.mdx'

const quiz: IQuiz = {
  name: 'srp-ideal-4',
  question: <Question />,
  variants: [
    {
      text: 'Ошибка в конструкторе: отсутствует определение названия отчёта'
    },
    {
      text: <Variant1 />
    },
    {
      text: <Variant2 />
    }
  ],
  meta: {
    correctAnswers: [1, 2]
  }
}

export default quiz

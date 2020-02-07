import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'

const quiz: IQuiz = {
  name: 'lsp-intro-2',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />,
      description:
        'Принцип не запрещает расширять функциональность per se, он запрещает вводить противоречащее поведение'
    },
    {
      text: <Variant2 />
    },
    {
      text: 'Квадрат математически — не прямоугольник, поэтому такая иерархия не удовлетворяет принципу',
      description:
        'Математически квадрат — как раз частный случай прямоугольника; но согласно принципу мы моделируем поведение сущностей, а не иерархию, поэтому математическое отношение между квадратом и прямоугольником имеет меньшее значение, чем разница в их поведении'
    }
  ],
  meta: {
    correctAnswers: [1]
  }
}

export default quiz

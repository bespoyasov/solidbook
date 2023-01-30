import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import { IQuiz } from '../IQuiz'

export const ocpIdeal2: IQuiz = {
  name: 'ocp-ideal-2',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />
    },
    {
      text: <Variant2 />
    },
    {
      text: 'Фигуры не будут одинаковыми, будут отличаться полями и методами',
      description:
        'Это нормально, так как фигуры действительно разные. Проблема в том, что не будет способа абстрагироваться от конкретных фигур, что повлечёт водопадные изменения в других модулях'
    }
  ],
  meta: {
    correctAnswers: [0, 1]
  }
}

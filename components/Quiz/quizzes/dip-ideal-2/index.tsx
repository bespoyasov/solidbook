import { IQuiz } from '../IQuiz'
import Description3 from './description-3.mdx'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'

export const dipIdeal2: IQuiz = {
  name: 'dip-ideal-2',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />
    },
    {
      text: <Variant2 />
    },
    {
      text: <Variant3 />,
      description: <Description3 />
    }
  ],
  meta: {
    correctAnswers: [0, 1]
  }
}

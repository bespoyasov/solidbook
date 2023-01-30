import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import { IQuiz } from '../IQuiz'

export const ispPatterns2: IQuiz = {
  name: 'isp-patterns-2',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />
    },
    {
      text: <Variant2 />
    }
  ],
  meta: {
    correctAnswers: [0, 1]
  }
}

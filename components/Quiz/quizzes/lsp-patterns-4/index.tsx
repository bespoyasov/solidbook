import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'
import Description2 from './description-2.mdx'
import Description3 from './description-3.mdx'

const quiz: IQuiz = {
  name: 'lsp-patterns-4',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />
    },
    {
      text: <Variant2 />,
      description: <Description2 />
    },
    {
      text: <Variant3 />,
      description: <Description3 />
    }
  ],
  meta: {
    correctAnswers: [0]
  }
}

export default quiz

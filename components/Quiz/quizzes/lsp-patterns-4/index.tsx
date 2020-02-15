import { IQuiz } from '../IQuiz'
import Description2 from './description-2.mdx'
import Description3 from './description-3.mdx'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'

export const lspPatterns4: IQuiz = {
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

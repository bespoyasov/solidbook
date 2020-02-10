import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'
import Description1 from './description-1.mdx'
import Description3 from './description-3.mdx'

export const lspPatterns2: IQuiz = {
  name: 'lsp-patterns-2',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />,
      description: <Description1 />
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
    correctAnswers: [1]
  }
}

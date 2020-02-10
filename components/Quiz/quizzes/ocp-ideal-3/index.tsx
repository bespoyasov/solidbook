import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'
import Description1 from './description-1.mdx'
import Description2 from './description-2.mdx'

export const ocpIdeal3: IQuiz = {
  name: 'ocp-ideal-3',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />,
      description: <Description1 />
    },
    {
      text: <Variant2 />,
      description: <Description2 />
    },
    {
      text: <Variant3 />
    }
  ],
  meta: {
    correctAnswers: [2]
  }
}

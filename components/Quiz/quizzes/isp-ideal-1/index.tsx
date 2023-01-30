import Description3 from './description-3.mdx'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'
import { IQuiz } from '../IQuiz'

export const ispIdeal1: IQuiz = {
  name: 'isp-ideal-1',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />,
      description:
        'В обоих случаях дело заключается не в размере модуля или интерфейса, а в его целостности и сфокусированности на конкретной задаче, к которой он относится'
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

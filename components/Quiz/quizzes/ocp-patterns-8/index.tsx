import Description2 from './description-2.mdx'
import Description4 from './description-4.mdx'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'
import Variant4 from './variant-4.mdx'
import { IQuiz } from '../IQuiz'

export const ocpPatterns8: IQuiz = {
  name: 'ocp-patterns-8',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />,
      description: 'Не совпадают сигнатуры всех методов и типы полей'
    },
    {
      text: <Variant2 />,
      description: <Description2 />
    },
    {
      text: <Variant3 />
    },
    {
      text: <Variant4 />,
      description: <Description4 />
    }
  ],
  meta: {
    correctAnswers: [2]
  }
}

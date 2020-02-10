import * as React from 'react'
import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Variant1 from './variants/text-1.mdx'
import Variant2 from './variants/text-2.mdx'
import Variant3 from './variants/text-3.mdx'
import Description2 from './variants/description-2.mdx'
import Description3 from './variants/description-3.mdx'

export const srpIdeal3: IQuiz = {
  name: 'srp-ideal-3',
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

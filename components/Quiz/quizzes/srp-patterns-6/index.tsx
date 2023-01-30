import * as React from 'react'

import Question from './question.mdx'
import Description3 from './variants/description-3.mdx'
import Variant1 from './variants/variant-1.mdx'
import Variant2 from './variants/variant-2.mdx'
import { IQuiz } from '../IQuiz'

export const srpPatterns6: IQuiz = {
  name: 'srp-patterns-6',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />
    },
    {
      text: <Variant2 />
    },
    {
      text: 'Код класса целиком, оставив лишь выбор между типами трека',
      description: <Description3 />
    }
  ],
  meta: {
    correctAnswers: [0, 1]
  }
}

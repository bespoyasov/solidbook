import * as React from 'react'

import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Variant1 from './variants/variant-1.mdx'
import Variant2 from './variants/variant-2.mdx'
import Variant3 from './variants/variant-3.mdx'

export const srpPatterns2: IQuiz = {
  name: 'srp-patterns-2',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />,
      description: 'Он относится к проигрыванию трека, а это основное назначение плеера'
    },
    {
      text: <Variant2 />,
      description: 'Он относится к остановке проигрывания трека, это тоже основное назначение плеера'
    },
    {
      text: <Variant3 />,
      description: 'Да, лучше сделать отдельный класс, который будет работать с загрузками'
    }
  ],
  meta: {
    correctAnswers: [2]
  }
}

import * as React from 'react'

import { IQuiz } from '../IQuiz'
import Variant1 from './variants/variant-1.mdx'
import Variant2 from './variants/variant-2.mdx'
import Variant3 from './variants/variant-3.mdx'

export const srpPatterns8: IQuiz = {
  name: 'srp-patterns-8',
  question:
    'Допустим, нам необходимо создать прокси, который бы кешировал ответы на запросы. Какой из вариантов реализации не содержит ошибок?',
  variants: [
    {
      text: <Variant1 />
    },
    {
      text: <Variant2 />,
      description: 'Этот вариант всегда ссылается на значение из кэша, даже если его нет'
    },
    {
      text: <Variant3 />,
      description:
        'Этот вариант вначале делает запрос, а потом проверяет, есть ли значение в кэше — то есть суть кэша исчезает'
    }
  ],
  meta: {
    correctAnswers: [0]
  }
}

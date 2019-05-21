import * as React from 'react'
import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Description from './description.mdx'

const quiz: IQuiz = {
  name: 'srp-patterns-3',
  question: <Question />,
  variants: [
    {
      text: '1 класс'
    },
    {
      text: '2 класса'
    },
    {
      text: '3 класса',
      description: <Description />
    }
  ],
  meta: {
    correctAnswers: [2]
  }
}

export default quiz

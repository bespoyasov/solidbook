import { IQuiz } from '../IQuiz'
import Question from './question.mdx'

const quiz: IQuiz = {
  name: 'dip-intro-1',
  question: <Question />,
  variants: [
    {
      text: 'Высокороувневые модули должны зависеть от низкоуровневых'
    },
    {
      text: 'Низкоуровневые модули должны зависеть от высокоуровневых'
    },
    {
      text: 'Высокороувневые модули должны зависеть от абстракций'
    },
    {
      text: 'Низкоуровневые модули должны зависеть от абстракций',
      description:
        'Согласно принципу высокороувневые модули не должны зависеть от низкоуровневых, и оба типа должны зависеть от абстракций'
    }
  ],
  meta: {
    correctAnswers: [2, 3]
  }
}

export default quiz

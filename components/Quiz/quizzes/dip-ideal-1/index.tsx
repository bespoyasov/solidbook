import Question from './question.mdx'
import Variant2 from './variant-2.mdx'
import { IQuiz } from '../IQuiz'

export const dipIdeal1: IQuiz = {
  name: 'dip-ideal-1',
  question: <Question />,
  variants: [
    {
      text: 'Уничтожает зависимость высокоуровневого модуля от низкоуровневого, заменяя последний на абстракцию'
    },
    {
      text: <Variant2 />
    },
    {
      text: 'Снижает зацепление модулей друг с другом'
    }
  ],
  meta: {
    correctAnswers: [0, 1, 2]
  }
}

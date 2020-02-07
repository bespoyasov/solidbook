import { IQuiz } from '../IQuiz'
import Variant2 from './variant-2.mdx'
import Description2 from './description-2.mdx'

export const ispAnti3: IQuiz = {
  name: 'isp-anti-3',
  question: 'В чём заключается опасность «пустой» реализации интерфейса?',
  variants: [
    {
      text:
        '«Пустая» реализация исполняет требования интерфейса лишь формально, что создаёт ложные ожидания от описанного метода'
    },
    {
      text: <Variant2 />,
      description: <Description2 />
    },
    {
      text: '«Пустая» реализация не даёт гарантий, что метод будет удовлетворять контракту или ожиданиям от него'
    }
  ],
  meta: {
    correctAnswers: [0, 2]
  }
}

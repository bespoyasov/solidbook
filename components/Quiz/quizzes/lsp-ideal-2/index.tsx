import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'

const quiz: IQuiz = {
  name: 'lsp-ideal-2',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />,
      description:
        'Прямое наследование здесь не подойдёт, потому что поведение эллипса отличается от поведения круга. Аналогично квадрату и прямоугольнику необходимо ввести общий базовый тип для обеих фигур'
    },
    {
      text: <Variant2 />
    },
    {
      text: <Variant3 />
    }
  ],
  meta: {
    correctAnswers: [1, 2]
  }
}

export default quiz

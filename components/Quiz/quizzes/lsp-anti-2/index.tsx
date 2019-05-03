import { IQuiz } from '../IQuiz'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'
import Variant4 from './variant-4.mdx'

const quiz: IQuiz = {
  name: 'lsp-anti-2',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />
    },
    {
      text: <Variant2 />,
      description: 'Наличие базового абстрактного класса не противоречит принципу'
    },
    {
      text: <Variant3 />
    },
    {
      text: <Variant4 />,
      description:
        'Доступность этого метода снаружи класса не противоречит базовому интерфейсу, поэтому конкретно в этом случае это бы не противоречило принципу'
    }
  ],
  meta: {
    correctAnswers: [0, 2]
  }
}

export default quiz

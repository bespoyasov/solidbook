import { IQuiz } from '../IQuiz'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'
import Description1 from './description-1.mdx'

const quiz: IQuiz = {
  name: 'ocp-patterns-6',
  question: 'Какой из классов ниже правильно использует декоратор для удаления всех пробелов из приветствия?',
  variants: [
    {
      text: <Variant1 />,
      description: <Description1 />
    },
    {
      text: <Variant2 />,
      description: 'Класс имплементирует неправильный интерфейс'
    },
    {
      text: <Variant3 />
    }
  ],
  meta: {
    correctAnswers: [2]
  }
}

export default quiz

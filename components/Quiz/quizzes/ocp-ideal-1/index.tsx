import { IQuiz } from '../IQuiz'
import Description3 from './description-3.mdx'
import Question from './question.mdx'
import Variant1 from './variant-1.mdx'
import Variant2 from './variant-2.mdx'
import Variant3 from './variant-3.mdx'
import Variant4 from './variant-4.mdx'

export const ocpIdeal1: IQuiz = {
  name: 'ocp-ideal-1',
  question: <Question />,
  variants: [
    {
      text: <Variant1 />
    },
    {
      text: <Variant2 />,
      description:
        'Меньший размер метода — не самоцель принципа, а следствие того, что пропадает необходимость проверять, к какому классу относится объект'
    },
    {
      text: <Variant3 />,
      description: <Description3 />
    },
    { text: <Variant4 /> }
  ],
  meta: {
    correctAnswers: [0, 3]
  }
}

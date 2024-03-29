import Question from './question.mdx'
import { IQuiz } from '../IQuiz'

export const lspIntro3: IQuiz = {
  name: 'lsp-intro-3',
  question: <Question />,
  variants: [
    {
      text: 'Контракты определяют поведение базовой сущности, которому должны следовать её потомки'
    },
    {
      text: 'Контракты предотвращают появление у потомков поведения, противоречащего поведению базовой сущности'
    },
    {
      text: 'Контракты освобождают разработчиков от написания тестов, так как сами по сути являются рантайм-тестами',
      description:
        'Контракты не освобождают от написания тестов, так как не покрывают логику метода полностью — лишь пред- и постусловия'
    },
    {
      text: 'Контракты определяют схему и иерархию наследования сущностей друг от друга',
      description:
        'Контракты определяют ограничения на расширение функциональности, но не определяют схему наследования'
    }
  ],
  meta: {
    correctAnswers: [0, 1]
  }
}

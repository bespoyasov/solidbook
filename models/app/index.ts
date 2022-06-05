import makeInspectable from 'mobx-devtools-mst'
import { types, typecheck, Instance, applySnapshot } from 'mobx-state-tree'

import { Quiz, createEmptyQuiz } from '../quiz'
import { SaveOnChangeMiddleware } from '../saveOnChange'
import { AppState } from '~/localStorage/AppState'

const START_SCORE = 0
const MAX_SCORE = 100

export const AppModel = types
  .model('App', {
    quizes: types.map(Quiz)
  })
  .actions((self) => ({
    createQuiz(name: string): Instance<typeof Quiz> {
      const quiz = createEmptyQuiz()
      self.quizes.set(name, quiz)
      return quiz
    }
  }))
  .actions((self) => ({
    getOrCreateQuizModel(name: string) {
      let quiz = self.quizes.get(name)
      if (!quiz) quiz = self.createQuiz(name)
      return quiz
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hydrate(state: any) {
      try {
        typecheck(AppModel, state)
        applySnapshot(self, state)
      } catch (error) {
        console.error(error) // eslint-disable-line no-console
      }
    }
  }))
  .views((self) => ({
    getByName(name: string) {
      return self.quizes.get(name)
    },
    has(name: string) {
      return self.quizes.has(name)
    },
    get asnwersNames() {
      return Object.keys(self.quizes)
    },
    get userScore() {
      let correctAnswers = 0
      const questionsCount = self.quizes.size

      self.quizes.forEach((quiz) => {
        if (quiz.isComplete) {
          if (quiz.correct.length === quiz.answers.length) {
            const isAllAnswersCorrect = quiz.answers.every((index) => quiz.correct.includes(index))

            if (isAllAnswersCorrect) {
              correctAnswers += 1
            }
          }
        }
      })

      const score = Math.ceil((MAX_SCORE - START_SCORE) * (correctAnswers / questionsCount)) + START_SCORE

      return Number.isNaN(score) ? START_SCORE : score
    },
    get totalScore() {
      return MAX_SCORE
    }
  }))

export function createAppModel(initState?: typeof AppModel): Instance<typeof AppModel> {
  let appModel: Instance<typeof AppModel>

  if (initState) {
    appModel = AppModel.create(initState)
  } else {
    appModel = AppModel.create({ quizes: {} })
  }

  const appStateRepository = AppState.instance
  const middleware = new SaveOnChangeMiddleware(appModel, appStateRepository, ['toggleComplete', 'toggleAnswer'])
  middleware.enable()

  makeInspectable(appModel)
  return appModel
}

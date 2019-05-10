import { types, typecheck, Instance, applySnapshot } from 'mobx-state-tree'
import Quiz, { createEmptyQuiz } from '~/models/quiz'
import { SaveOnChangeMiddleware } from './saveOnChange'
import makeInspectable from 'mobx-devtools-mst'

const AppModel = types
  .model('App', {
    quizes: types.map(Quiz)
  })
  .actions(self => ({
    createQuiz(name: string): Instance<typeof Quiz> {
      const quiz = createEmptyQuiz()
      self.quizes.set(name, quiz)
      return quiz
    }
  }))
  .actions(self => ({
    getOrCreateQuizModel(name: string) {
      let quiz = self.quizes.get(name)
      if (!quiz) quiz = self.createQuiz(name)
      return quiz
    },
    hydrate(state: any) {
      try {
        typecheck(AppModel, state)
        applySnapshot(self, state)
      } catch (error) {
        console.error(error)
      }
    }
  }))
  .views(self => ({
    getByName(name: string) {
      return self.quizes.get(name)
    },
    get asnwersNames() {
      return Object.keys(self.quizes)
    },
    get userScore() {
      let score = 0
      self.quizes.forEach(quiz => {
        if (quiz.isComplete) {
          if (quiz.correct.length === quiz.answers.length) {
            const isAllAnswersCorrect = quiz.answers.every(index => quiz.correct.includes(index))

            if (isAllAnswersCorrect) {
              score += 10
            }
          }
        }
      })
      return score
    },
    get totalScore() {
      return self.quizes.size * 10
    }
  }))

function createAppModel(initState?): Instance<typeof AppModel> {
  let appModel: Instance<typeof AppModel>

  if (initState) {
    appModel = AppModel.create(initState)
  } else {
    appModel = AppModel.create({ quizes: {} })
  }

  const middleware = new SaveOnChangeMiddleware(appModel, ['toggleComplete', 'toggleAnswer'])
  middleware.enable()

  makeInspectable(appModel)
  return appModel
}

export default createAppModel
export { AppModel }

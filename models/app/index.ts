import { types, Instance } from 'mobx-state-tree'
import Quiz, { createEmptyQuiz } from '~/models/quiz'
import { SaveOnChangeMiddleware } from './saveOnChange'

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
      if (!quiz) {
        quiz = self.createQuiz(name)
      }
      return quiz
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

  return appModel
}

export default createAppModel
export { AppModel }

import { Service } from './ServicesManager'
import * as quizList from '~/components/Quiz/quiz-list'
import AppStateRepository from '~/repository/AppStateRepository'

class QuizCreator implements Service {
  init(app) {
    let state = AppStateRepository.instance.load()

    const quizNames = Object.keys(quizList)

    if (state != null) {
      Object.keys(state).forEach(key => {
        if (!quizNames.includes(key)) {
          delete state[key]
        }
      })

      app.hydrate(state)
    }

    quizNames.forEach(quizName => {
      app.getOrCreateQuizModel(quizName)
    })
  }

  shutdown() {}
}

export default QuizCreator

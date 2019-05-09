import { Service } from './ServicesManager'
import * as quizList from '~/components/Quiz/quiz-list'
import AppStateRepository from '~/repository/AppStateRepository'

class QuizCreator implements Service {
  init(app) {
    const state = AppStateRepository.instance.load()

    if (state != null) app.hydrate(state)

    Object.keys(quizList).forEach(quizName => {
      app.getOrCreateQuizModel(quizName)
    })
  }

  shutdown() {}
}

export default QuizCreator

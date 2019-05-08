import { Service } from './ServicesManager'
import * as quizList from '~/components/Quiz/quiz-list'

class QuizCreator implements Service {
  init(app) {
    console.log('init')
    try {
      const appState = JSON.parse(localStorage.getItem('__app'))
      app.hydrate(appState)
    } catch {}

    Object.keys(quizList).forEach(quizName => {
      app.getOrCreateQuizModel(quizName)
    })
    console.log(app.toJSON())
  }

  shutdown() {}
}

export default QuizCreator

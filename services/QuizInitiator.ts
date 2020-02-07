import { Service } from './ServicesManager'
import * as quizList from '~/components/Quiz/quiz-list'
import { AppStateRepository } from '~/repository/AppStateRepository'
import { Instance } from 'mobx-state-tree'
import { AppModel } from '~/models/app'
import { Quiz } from '~/models/quiz'

export class QuizInitiator implements Service {
  init(app: Instance<typeof AppModel>) {
    let state: { quizes: object } = AppStateRepository.instance.load()

    const quizNames = Object.keys(quizList)

    if (state != null) {
      Object.keys(state.quizes).forEach(key => {
        if (!quizNames.includes(key)) {
          delete state.quizes[key]
        }
      })
      app.hydrate(state)
    }

    quizNames.forEach(quizName => {
      let model: Instance<typeof Quiz>
      if (!app.has(quizName)) model = app.createQuiz(quizName)
      else model = app.getByName(quizName)
      model.setCorrectAnswers(quizList[quizName].meta.correctAnswers)
    })
  }

  shutdown() {}
}

import { Instance } from 'mobx-state-tree'

import { Service } from './ServicesManager'
import * as quizList from '~/components/Quiz/quiz-list'
import { AppModel } from '~/models/app'
import { Quiz } from '~/models/quiz'
import { AppState } from '~/localStorage/AppState'

export class QuizInitiator implements Service {
  init(app: Instance<typeof AppModel>) {
    const state: { quizes: object } = AppState.instance.load()

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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  shutdown() {}
}

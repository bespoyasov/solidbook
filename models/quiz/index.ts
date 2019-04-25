import { types } from 'mobx-state-tree'

const Quiz = types
  .model('Quiz', {
    answer: types.maybeNull(types.number),
    isComplete: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleAnswer(answerIndex: number) {
      if (self.answer && self.answer === answerIndex) {
        self.answer = null
      } else {
        self.answer = answerIndex
      }
    },
    toggleComplete() {
      self.isComplete = !self.isComplete
    }
  }))

function createEmptyQuiz() {
  return Quiz.create({ answer: null, isComplete: false })
}

export default Quiz
export { createEmptyQuiz }

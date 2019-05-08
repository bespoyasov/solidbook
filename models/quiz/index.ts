import { types } from 'mobx-state-tree'

const Quiz = types
  .model('Quiz', {
    answers: types.array(types.number),
    isComplete: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleAnswer(answerIndex: number) {
      if (self.answers.includes(answerIndex)) {
        const index = self.answers.indexOf(answerIndex)
        self.answers.splice(index, 1)
      } else {
        self.answers.push(answerIndex)
      }
    },
    toggleComplete() {
      if (self.isComplete == true) {
        self.answers.splice(0)
      }

      self.isComplete = !self.isComplete
    }
  }))

function createEmptyQuiz() {
  return Quiz.create({ answers: [], isComplete: false })
}

export default Quiz
export { createEmptyQuiz }

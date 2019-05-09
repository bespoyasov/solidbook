import * as React from 'react'
import { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import { AppModel } from '~/models/app'
import QuizContainer from '~/components/Quiz/components/QuizContainer'
import { IQuiz } from '~/components/Quiz/quizzes/IQuiz'
import camelcase from 'camelcase'
import * as quizzes from '../quiz-list'

interface IProps {
  name: string
}

interface IInjectedProps {
  app: Instance<typeof AppModel>
}

interface IState {
  error: string | null
}

class QuizLoader extends Component<IProps, IState> {
  module: IQuiz
  moduleName: string
  isMounted: boolean = false

  constructor(props) {
    super(props)

    this.state = { error: null }

    this.moduleName = camelcase(this.props.name)
    this.module = quizzes[this.moduleName]

    if (!this.moduleName)
      this.state = { error: `Module ${this.moduleName} not found. Check components/Quiz/quiz-list` }
  }

  get injected() {
    return this.props as IInjectedProps & IProps
  }

  componentDidCatch(error) {
    console.error(error)
    this.setState({ error: error.message })
  }

  checkVariant = (index: number) => {
    return this.module.meta.correctAnswers.includes(index)
  }

  render() {
    const { error } = this.state

    if (error) {
      return this.renderError()
    } else {
      return this.renderQuiz()
    }
  }

  renderError() {
    const { error } = this.state
    return (
      <>
        <p>Ошибка загрузки модуля:</p>
        <pre>{error}</pre>
      </>
    )
  }

  renderQuiz() {
    const { app } = this.injected
    const quizModel = app.getOrCreateQuizModel(this.moduleName)

    return (
      <QuizContainer
        name={this.moduleName}
        quizModel={quizModel}
        question={this.module.question}
        variants={this.module.variants}
        checkVariant={this.checkVariant}
      />
    )
  }
}

export default inject('app')(observer(QuizLoader))

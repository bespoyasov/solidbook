import * as React from 'react'
import { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import { AppModel } from '~/models/app'
import { QuizContainer } from '~/components/Quiz/components/QuizContainer'
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

  constructor(props) {
    super(props)

    this.state = { error: null }

    this.moduleName = camelcase(this.props.name)
    this.module = quizzes[this.moduleName]

    if (this.module == null)
      this.state = { error: `Module ${this.moduleName} not found. Check components/Quiz/quiz-list` }
  }

  get injected() {
    return this.props as IInjectedProps & IProps
  }

  componentDidCatch(error) {
    console.error(error)
    this.setState({ error: error.message })
  }

  render() {
    const { error } = this.state
    const { app } = this.injected
    const quizModel = app.getByName(this.moduleName)

    if (error) {
      return this.renderError()
    } else if (quizModel) {
      return this.renderQuiz()
    } else {
      return null
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
    const quizModel = app.getByName(this.moduleName)

    return (
      <QuizContainer
        name={this.moduleName}
        quizModel={quizModel}
        question={this.module.question}
        variants={this.module.variants}
      />
    )
  }
}

export const Quiz = inject('app')(observer(QuizLoader))

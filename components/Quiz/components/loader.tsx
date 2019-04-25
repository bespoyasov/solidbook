import * as React from 'react'
import { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import { AppModel } from '~/models/app'
import QuizContainer from '~/components/Quiz/components/QuizContainer'
import { IQuiz } from '~/components/Quiz/quizzes/IQuiz'

interface IProps {
  name: string
}

interface IInjectedProps {
  app: Instance<typeof AppModel>
}

class QuizLoader extends Component<IProps> {
  module: IQuiz

  state = {
    loaded: false,
    error: null
  }

  get injected() {
    return this.props as IInjectedProps & IProps
  }

  componentDidMount() {
    import(`../quizzes/${this.props.name}`)
      .then(c => {
        this.module = c.default
        this.setState({ loaded: true })
      })
      .catch(error => {
        console.error(error)
        this.setState({ loaded: true, error: error.message })
      })
  }

  componentDidCatch(error) {
    console.error(error)
    this.setState({ error: error.message })
  }

  checkVariant = (index: number) => {
    return this.module.meta.correctAnswers.includes(index)
  }

  render() {
    const { name, app } = this.injected
    const { loaded, error } = this.state
    const quizModel = app.getOrCreateQuizModel(name)

    if (error) {
      return (
        <>
          <p>Ошибка загрузки модуля:</p>
          <pre>{error}</pre>
        </>
      )
    } else if (loaded) {
      return (
        <QuizContainer
          name={name}
          quizModel={quizModel}
          question={this.module.question}
          variants={this.module.variants}
          checkVariant={this.checkVariant}
        />
      )
    } else {
      return <p>Вопросы загружаются...</p>
    }
  }
}

export default inject('app')(observer(QuizLoader))

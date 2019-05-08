import { Component } from 'react'
import QuizInitiator from './QuizInitiator'
import { inject } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import { AppModel } from '~/models/app'

const services: Service[] = [new QuizInitiator()]

interface IInjectedProps {
  app: Instance<typeof AppModel>
}

export interface Service {
  init: (app: Instance<typeof AppModel>) => void
  shutdown: () => void
}

class ServicesManager extends Component {
  shouldComponentUpdate() {
    return false
  }

  get injected() {
    return this.props as IInjectedProps
  }

  componentDidMount() {
    services.forEach(service => service.init(this.injected.app))
  }

  componentWillUnmount() {
    services.forEach(service => service.shutdown())
  }

  render() {
    return null
  }
}

export default inject('app')(ServicesManager)

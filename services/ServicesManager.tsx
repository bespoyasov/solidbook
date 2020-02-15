import { inject } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import { Component } from 'react'

import { QuizInitiator } from './QuizInitiator'

import { AppModel } from '~/models/app'

const services: Service[] = [new QuizInitiator()]

interface IInjectedProps {
  app: Instance<typeof AppModel>
}

export interface Service {
  init: (app: Instance<typeof AppModel>) => void
  shutdown: () => void
}

class BaseServicesManager extends Component {
  componentDidMount() {
    services.forEach(service => service.init(this.injected.app))
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillUnmount() {
    services.forEach(service => service.shutdown())
  }

  get injected() {
    return this.props as IInjectedProps
  }

  render() {
    return null
  }
}

export const ServicesManager = inject('app')(BaseServicesManager)

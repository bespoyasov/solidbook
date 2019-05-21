import { addMiddleware, IAnyStateTreeNode } from 'mobx-state-tree'
import AppStateRepository from '~/repository/AppStateRepository'

class SaveOnChangeMiddleware {
  actions: string[]
  store: IAnyStateTreeNode

  constructor(store: IAnyStateTreeNode, actions: string[]) {
    this.store = store
    this.actions = actions
  }

  enable() {
    addMiddleware(this.store, this.saveOnChange)
  }

  saveOnChange = (call, next, _abort) => {
    next(call)

    if (this.actions.includes(call.name)) {
      AppStateRepository.instance.save(this.store.toJSON())
    }
  }
}

export { SaveOnChangeMiddleware }

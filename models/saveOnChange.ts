import { addMiddleware, IAnyStateTreeNode } from 'mobx-state-tree'

interface IStateRepository {
  load(ctx?: object): object | null
  save(state: object): void
}

class SaveOnChangeMiddleware {
  actions: string[]
  store: IAnyStateTreeNode
  repository: IStateRepository

  constructor(store: IAnyStateTreeNode, repository: IStateRepository, actions: string[]) {
    this.store = store
    this.actions = actions
    this.repository = repository
  }

  enable() {
    addMiddleware(this.store, this.saveOnChange)
  }

  saveOnChange = (call, next, _abort) => {
    next(call)

    if (this.actions.includes(call.name)) {
      this.repository.save(this.store.toJSON())
    }
  }
}

export { SaveOnChangeMiddleware }

class AppStateRepository {
  private static _instance: AppStateRepository

  private localstorageKey: string

  public static get instance() {
    return this._instance || (this._instance = new this())
  }

  private constructor() {
    this.localstorageKey = 'solid-book'
  }

  load(): { quizes: object } | null {
    try {
      const base64String = localStorage.getItem(this.localstorageKey)
      const jsonState = atob(base64String!)
      const state = JSON.parse(jsonState)
      return state
    } catch {
      return null
    }
  }

  save(state: object) {
    const jsonState = JSON.stringify(state)
    const base64String = btoa(jsonState)
    localStorage.setItem(this.localstorageKey, base64String)
  }
}

export default AppStateRepository

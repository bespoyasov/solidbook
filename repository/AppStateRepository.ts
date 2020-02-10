class AppStateRepository {
  private static _instance: AppStateRepository

  private localstorageKey: string

  public static get instance(): AppStateRepository {
    // eslint-disable-next-line no-return-assign
    return this._instance || (this._instance = new this())
  }

  private constructor() {
    this.localstorageKey = 'solid-book'
  }

  public load(): { quizes: object } | null {
    try {
      const base64String = localStorage.getItem(this.localstorageKey)
      const jsonState = atob(base64String!)
      const state = JSON.parse(jsonState)
      return state
    } catch {
      return null
    }
  }

  public save(state: object): void {
    const jsonState = JSON.stringify(state)
    const base64String = btoa(jsonState)
    localStorage.setItem(this.localstorageKey, base64String)
  }
}

export default AppStateRepository

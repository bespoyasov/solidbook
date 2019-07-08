import cookies from 'next-cookies'
import { NextContext } from 'next'
import { Instance } from 'mobx-state-tree'
import { ThemeModel } from '~/models/theme'

class ThemeStateRepository {
  private static _instance: ThemeStateRepository
  private cookie: string

  public static get instance() {
    return this._instance || (this._instance = new this())
  }

  private constructor() {
    this.cookie = 'solid_book_theme'
  }

  load(ctx: NextContext): Instance<typeof ThemeModel> | null {
    try {
      const saved = cookies(ctx)
      const cookie = saved[this.cookie]
      return JSON.parse(cookie)
    } catch (e) {
      return null
    }
  }

  save(state: object) {
    document.cookie = `${this.cookie}=${JSON.stringify(state)}`
  }
}

export default ThemeStateRepository

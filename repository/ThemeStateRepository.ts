import { Instance } from 'mobx-state-tree'
import { NextPageContext } from 'next'
import { setCookie, parseCookies } from 'nookies'

import { ThemeModel } from '~/models/theme'

export class ThemeStateRepository {
  private static _instance: ThemeStateRepository

  private ctx?: NextPageContext

  private key: string

  public static get instance() {
    // eslint-disable-next-line no-return-assign
    return this._instance || (this._instance = new this())
  }

  private constructor() {
    this.key = 'solid_book_theme'
  }

  public setContext(ctx: NextPageContext) {
    this.ctx = ctx
  }

  public load(): Instance<typeof ThemeModel> | null {
    try {
      const saved = parseCookies(this.ctx)
      const cookie = saved[this.key]
      return JSON.parse(cookie)
    } catch (e) {
      return null
    }
  }

  public save(state: object) {
    setCookie(this.ctx, this.key, JSON.stringify(state), {
      maxAge: 12 * 30 * 24 * 60 * 60
    })
  }
}

import Typograf from 'typograf'

/**
 * Синглтон-адаптер для библиотеки Typograf
 *
 * @class Typografy
 */
export class Typografy {
  private static _instance: Typografy

  private typograf: any // eslint-disable-line @typescript-eslint/no-explicit-any

  public static get instance() {
    return this._instance || (this._instance = new this())
  }

  private constructor() {
    this.typograf = new Typograf({ locale: ['ru', 'en-US'] })
    this.typograf.disableRule('common/space/delLeadingBlanks')
    this.typograf.disableRule('common/space/delTrailingBlanks')
    this.typograf.disableRule('common/space/trimLeft')
    this.typograf.disableRule('common/space/trimRight')
  }

  public transform(text: string): string {
    return this.typograf.execute(text)
  }
}

import Typograf from 'typograf'

/**
 * Синглтон-адаптер для библиотеки Typograf
 *
 * @class Typografy
 */
class Typografy {
  private static _instance: Typografy

  private typograf: any

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

export default Typografy

import { countOccurencies } from './index'

const testRegexpString = /test/g
const testRegexpSymbol = /\//g
const testSourcePositive = 'test test something else and test again /'
const testSourceNegative = 'no required string here'

describe('lib > countOccurencies', () => {
  it('Возвращает количество вхождений первой строки во вторую', () => {
    const result = countOccurencies(testRegexpString, testSourcePositive)
    expect(result).toEqual(3)
  })

  it('Возвращает количество вхождений спец. символа в строку', () => {
    const result = countOccurencies(testRegexpSymbol, testSourcePositive)
    expect(result).toEqual(1)
  })

  it('Возвращает 0, если вхождений нет', () => {
    const result = countOccurencies(testRegexpString, testSourceNegative)
    expect(result).toEqual(0)
  })
})

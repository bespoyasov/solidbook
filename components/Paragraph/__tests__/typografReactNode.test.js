import React from 'react'
import TypografyReactNode from '../TypografReactNode'

const NON_BREAK_SPACE_CODE = 160
const BREAK_SPACE_CODE = 32
const SPACE_SYBMOL = ' '

describe('Typograf rules', () => {
  it('common/nbsp/afterShortWord with simple component', () => {
    const resultNode = TypografyReactNode.process(<p>с изменениями</p>)
    expect(resultNode.props.children.charCodeAt(1)).toEqual(NON_BREAK_SPACE_CODE)
  })

  it('common/nbsp/afterShortWord with nested component #1', () => {
    const resultNode = TypografyReactNode.process(
      <p>
        с <span>изменениями</span>
      </p>
    )

    expect(resultNode.props.children[0].charCodeAt(1)).toEqual(NON_BREAK_SPACE_CODE)
  })

  it('common/nbsp/afterShortWord with nested component #2', () => {
    const resultNode = TypografyReactNode.process(
      <p>
        <span>с</span> изменениями
      </p>
    )
    console.log(resultNode)
    expect(resultNode.props.children[1].charCodeAt(0)).toEqual(NON_BREAK_SPACE_CODE)
  })

  it('common/nbsp/afterShortWord with nested component #3', () => {
    const resultNode = TypografyReactNode.process([SPACE_SYBMOL, <p>ООП</p>, SPACE_SYBMOL, 'вызывает'])
    expect(resultNode.props.children[2]).toEqual(SPACE_SYBMOL)
  })

  it('common/nbsp/afterShortWord with nested component #3', () => {
    const resultNode = TypografyReactNode.process([SPACE_SYBMOL])

    expect(resultNode.props.children).toEqual(SPACE_SYBMOL)
  })
})

import React from 'react'

import { TypografyReactChildren } from '../index'

const NON_BREAK_SPACE_CODE = 160
const LESS_THEN_EQUAL_CODE = 8804
const BREAK_SPACE_SYBMOL = ' '

describe('Typograf rules', () => {
  it('common/nbsp/afterShortWord with simple component', () => {
    const resultNode = TypografyReactChildren.processElement(<p>с изменениями</p>)
    expect(resultNode.props.children.charCodeAt(1)).toEqual(NON_BREAK_SPACE_CODE)
  })

  it('common/nbsp/afterShortWord with nested component #1', () => {
    const resultNode = TypografyReactChildren.processElement(
      <p>
        с <span>изменениями</span>
      </p>
    )

    expect(resultNode.props.children[0].charCodeAt(1)).toEqual(NON_BREAK_SPACE_CODE)
  })

  it('common/nbsp/afterShortWord with nested component #2', () => {
    const resultNode = TypografyReactChildren.processElement(
      <p>
        <span>с</span> изменениями
      </p>
    )
    expect(resultNode.props.children[1].charCodeAt(0)).toEqual(NON_BREAK_SPACE_CODE)
  })

  it('common/nbsp/afterShortWord with nested component #3', () => {
    const resultNode = TypografyReactChildren.processElement([
      BREAK_SPACE_SYBMOL,
      <p key="oop">ООП</p>,
      BREAK_SPACE_SYBMOL,
      'вызывает'
    ])

    expect(resultNode.props.children[1]).toEqual(BREAK_SPACE_SYBMOL)
  })

  it('common/nbsp/afterShortWord with nested component #4', () => {
    const resultNode = TypografyReactChildren.processElement([BREAK_SPACE_SYBMOL])

    expect(resultNode.props.children).toEqual(BREAK_SPACE_SYBMOL)
  })

  it('common/number/mathSigns + common/nbsp/afterShortWord', () => {
    const resultNode = TypografyReactChildren.processElement(
      <p>
        <span>{`<=`}</span> b
      </p>
    )
    expect(resultNode.props.children[0].props.children.charCodeAt(0)).toEqual(LESS_THEN_EQUAL_CODE)
  })
})

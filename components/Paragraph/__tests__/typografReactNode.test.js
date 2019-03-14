import React from 'react'
import typografReactNode from '../typografReactNode'

const nbsp_code = 160

describe('Typograf rules', () => {
  it('common/nbsp/afterShortWord with simple component', () => {
    const resultNode = typografReactNode(<p>с изменениями</p>)
    expect(resultNode.props.children.charCodeAt(1)).toEqual(160)
  })

  it('common/nbsp/afterShortWord with nested component #1', () => {
    const resultNode = typografReactNode(
      <p>
        с <span>изменениями</span>
      </p>
    )

    expect(resultNode.props.children[0].charCodeAt(1)).toEqual(160)
  })

  it('common/nbsp/afterShortWord with nested component #2', () => {
    const resultNode = typografReactNode(
      <p>
        <span>с</span> изменениями
      </p>
    )
    expect(resultNode.props.children[1].charCodeAt(0)).toEqual(160)
  })

  it('common/nbsp/afterShortWord with nested component #3', () => {
    const resultNode = typografReactNode([' ', <p>ООП</p>, ' ', 'вызывает'])
    expect(resultNode.props.children[2]).toEqual(' ')
  })

  it('common/nbsp/afterShortWord with nested component #3', () => {
    const resultNode = typografReactNode([' '])

    expect(resultNode.props.children).toEqual(' ')
  })
})

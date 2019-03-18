import React from 'react'
import TextNode from '../index'

describe('TextNode firstWord', () => {
  it('return "1" from <p>1 asd asd</p>', () => {
    expect(new TextNode(<p>1 asd asd</p>).firstWord).toEqual('1')
  })

  it('return "s" from <p>s aasdf</p>', () => {
    expect(new TextNode(<p>s aasdf</p>).firstWord).toEqual('s')
  })

  it('return "super" from <p><span>super</span>duper</p>', () => {
    expect(
      new TextNode(
        (
          <p>
            <span>super</span>duper
          </p>
        )
      ).firstWord
    ).toEqual('super')
  })

  it('return "super" from ["super", "man"]', () => {
    expect(new TextNode(['super', 'man']).firstWord).toEqual('super')
  })
})

describe('TextNode lastWord', () => {
  it('return "asd" from <p>1 asd asd</p>', () => {
    expect(new TextNode(<p>1 asd asd</p>).lastWord).toEqual('asd')
  })

  it('return "aasdf" from <p>s aasdf</p>', () => {
    expect(new TextNode(<p>s aasdf</p>).lastWord).toEqual('aasdf')
  })

  it('return "duper" from <p><span>super</span>duper</p>', () => {
    expect(
      new TextNode(
        (
          <p>
            <span>super</span>duper
          </p>
        )
      ).lastWord
    ).toEqual('duper')
  })

  it('return "man" from ["super", "man"]', () => {
    expect(new TextNode(['super', 'man']).lastWord).toEqual('man')
  })

  it('return undefined from ["super", true]', () => {
    expect(new TextNode(['super', true]).lastWord).toEqual(undefined)
  })
})

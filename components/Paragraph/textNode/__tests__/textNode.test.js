import React from 'react'

import { ReactTextNode } from '../index'

describe('ReactTextNode firstWord', () => {
  it('return "1" from <p>1 asd asd</p>', () => {
    expect(new ReactTextNode(<p>1 asd asd</p>).firstWord).toEqual('1')
  })

  it('return "s" from <p>s aasdf</p>', () => {
    expect(new ReactTextNode(<p>s aasdf</p>).firstWord).toEqual('s')
  })

  it('return "super" from <p><span>super</span>duper</p>', () => {
    expect(
      new ReactTextNode(
        (
          <p>
            <span>super</span>duper
          </p>
        )
      ).firstWord
    ).toEqual('super')
  })

  it('return "super" from ["super", "man"]', () => {
    expect(new ReactTextNode(['super', 'man']).firstWord).toEqual('super')
  })
})

describe('ReactTextNode lastWord', () => {
  it('return "asd" from <p>1 asd asd</p>', () => {
    expect(new ReactTextNode(<p>1 asd asd</p>).lastWord).toEqual('asd')
  })

  it('return "aasdf" from <p>s aasdf</p>', () => {
    expect(new ReactTextNode(<p>s aasdf</p>).lastWord).toEqual('aasdf')
  })

  it('return "duper" from <p><span>super</span>duper</p>', () => {
    expect(
      new ReactTextNode(
        (
          <p>
            <span>super</span>duper
          </p>
        )
      ).lastWord
    ).toEqual('duper')
  })

  it('return "man" from ["super", "man"]', () => {
    expect(new ReactTextNode(['super', 'man']).lastWord).toEqual('man')
  })

  it('return undefined from ["super", true]', () => {
    expect(new ReactTextNode(['super', true]).lastWord).toEqual(undefined)
  })
})

import React, { ReactElement } from 'react'
import Typografy from '~/domain/text/typografy'

function typografReactNodes(node: ReactElement) {
  const typograf = Typografy.instance
  let children

  if (node && node.props && node.props.children) {
    children = React.Children.toArray(node.props.children)
  } else if (Array.isArray(node)) {
    children = node
  }

  if (React.Children.count(children) === 1) {
    return React.cloneElement(node, { children: typograf.transform(children) })
  } else if (React.Children.count(children) === 0) {
    return node
  } else {
    const result = []

    for (let i = 0; i < children.length; i++) {
      const hasNext = !!children[i + 1]
      const hasPrev = !!children[i - 1]
      const current = children[i]

      if (typeof current === 'string') {
        if (hasNext) {
          const nextWord = getFirstWordFromNode(children[i + 1])

          let typeografedText = typograf.transform(current + nextWord)
          const index = typeografedText.lastIndexOf(nextWord)

          typeografedText = typeografedText.substring(0, index)

          result.push(typeografedText)
        } else if (hasPrev) {
          const nextWord = getFirstWordFromNode(children[i - 1])

          let typeografedText = typograf.transform(nextWord + current)
          typeografedText = typeografedText.replace(nextWord, '')

          result.push(typeografedText)
        }
      } else {
        result.push(current)
      }
    }
    return React.cloneElement(node, { children: result })
  }
}

function getFirstWordFromNode(node: ReactElement) {
  if (typeof node === 'string') {
    return getFirstWord(node)
  } else if (node.props.children === 'string') {
    return getFirstWord(node.props.children)
  } else if (Array.isArray(node.props.children)) {
    return getFirstWordFromNode(node.props.children[0])
  } else {
    return getFirstWordFromNode(node.props.children)
  }
}

function getFirstWord(str: string) {
  return str.split(' ')[0]
}

export default typografReactNodes

import React, { ReactChild, ReactElement } from 'react'
import Typografy from '~/domain/text/typografy'
import TextNode from '~/domain/react/textNode'

class TypografyReactNode {
  public static process(node: ReactChild) {
    const typograf = Typografy.instance
    if (typeof node === 'number' || typeof node === 'string') return typograf.transform(String(node))

    const children = Array.isArray(node) ? node : React.Children.toArray(node.props.children)

    if (React.Children.count(children) === 1) {
      return React.cloneElement(node, { children: typograf.transform(children[0]) })
    } else if (React.Children.count(children) === 0) {
      return node
    }

    return this.processChildren(children, node)
  }

  private static processChildren(elements: ReactChild[], parent: ReactElement): ReactElement {
    const typograf = Typografy.instance

    const result = elements.reduce((acc, element, index, elements) => {
      const hasNext = index + 1 < elements.length
      const hasPrev = index > 0

      if (typeof element === 'string') {
        let words = []
        if (hasPrev) words.push(new TextNode(elements[index - 1]).lastWord)
        words.push(element)
        if (hasNext) words.push(new TextNode(elements[index + 1]).firstWord)

        let typografedSentence = typograf.transform(words.join(''))

        if (hasPrev) {
          let word = new TextNode(elements[index - 1]).lastWord
          word = typograf.transform(word)
          const wordIndex = typografedSentence.indexOf(word)
          typografedSentence = typografedSentence.substring(wordIndex + word.length, typografedSentence.length)
        }

        if (hasNext) {
          let word = new TextNode(elements[index + 1]).firstWord
          word = typograf.transform(word)
          const wordIndex = typografedSentence.indexOf(word)
          typografedSentence = typografedSentence.substring(0, wordIndex)
        }
        acc.push(typografedSentence)
      } else {
        acc.push(element)
      }
      return acc
    }, [])

    return React.cloneElement(parent, { children: result })
  }
}

export default TypografyReactNode

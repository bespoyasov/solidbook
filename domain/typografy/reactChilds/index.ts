import React, { ReactChild, ReactElement } from 'react'
import Typografy from '~/domain/text/typografy'
import TextNode from '~/domain/react/textNode'
import typografTextWithNeighbors from '~/domain/typografy/typogragyTextWithNeighbors'
import { getType, TYPES } from '~/domain/react/childType'

class TypografyReactNode {
  public static process(node: ReactChild) {
    switch (getType(node)) {
      case TYPES.STRING:
        return Typografy.instance.transform(node as string)

      case TYPES.NUMBER:
        return Typografy.instance.transform(String(node))

      case TYPES.ARRAY:
        return this.processChildren((node as unknown) as Array<ReactChild>, ([] as unknown) as ReactElement)

      case TYPES.REACT_ELEMENT_WITH_CHILDREN:
        return this.processChildren(React.Children.toArray((node as ReactElement).props.children), node as ReactElement)

      case TYPES.NULL:
      case TYPES.UNDEFINED:
      case TYPES.BOOLEAN:
      case TYPES.REACT_ELEMENT_WITHOUT_CHILDREN:
      default:
        return node
    }
  }

  private static processChildren(elements: ReactChild[], parent: ReactElement): ReactElement {
    switch (elements.length) {
      case 0:
        return React.cloneElement(parent, { children: elements })

      case 1:
        switch (getType(elements[0])) {
          case TYPES.STRING:
            return React.cloneElement(parent, { children: Typografy.instance.transform(elements[0] as string) })
          default:
            return React.cloneElement(parent, { children: this.process(elements[0]) })
        }

      default: {
        const result = elements.reduce((acc, element, index, elements) => {
          const hasNext = index < elements.length - 1
          const hasPrev = index > 0

          if (index === 0 && element === ' ') {
            return acc
          } else if (index === elements.length - 1 && element === ' ') {
            return acc
          } else {
            switch (getType(element)) {
              case TYPES.STRING:
                acc.push(
                  typografTextWithNeighbors(
                    element as string,
                    hasPrev && new TextNode(elements[index - 1]).lastWord,
                    hasNext && new TextNode(elements[index + 1]).firstWord
                  )
                )
                break

              case TYPES.ARRAY:
                acc.push(this.processChildren((element as unknown) as ReactChild[], element as ReactElement))
                break

              case TYPES.REACT_ELEMENT_WITH_CHILDREN:
                acc.push(
                  this.processChildren(
                    React.Children.toArray((element as ReactElement).props.children),
                    element as ReactElement
                  )
                )
                break
            }
          }

          return acc
        }, [])

        return React.cloneElement(parent, { children: result })
      }
    }
  }
}

export default TypografyReactNode

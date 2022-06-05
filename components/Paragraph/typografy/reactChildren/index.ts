import React, { ReactElement, ReactNode } from 'react'

import { Typografy } from '..'
import { getType, TYPES } from '../../childType'
import { ReactTextNode as TextNode } from '../../textNode'

import { typografTextWithNeighbors } from '../textWithNeighbors'

export class TypografyReactChildren {
  public static processElement(node: ReactNode) {
    switch (getType(node)) {
      case TYPES.STRING:
        return Typografy.instance.transform(node as string)

      case TYPES.NUMBER:
        return Typografy.instance.transform(String(node))

      case TYPES.ARRAY:
        return this.processElementList(node as unknown as ReactNode[], [] as unknown as ReactElement)

      case TYPES.REACT_ELEMENT_WITH_CHILDREN:
        return this.processElementList(
          React.Children.toArray((node as unknown as JSX.Element).props.children),
          node as ReactElement
        )

      default:
        return node
    }
  }

  public static processElementList(elements: ReactNode[], parent: ReactElement): ReactElement {
    switch (elements.length) {
      case 0:
        return React.cloneElement(parent, { children: elements })

      case 1:
        switch (getType(elements[0])) {
          case TYPES.STRING:
            return React.cloneElement(parent, { children: Typografy.instance.transform(elements[0] as string) })
          default:
            return React.cloneElement(parent, { children: this.processElement(elements[0]) })
        }

      default: {
        // eslint-disable-next-line no-shadow
        const result = elements.reduce((acc: ReactNode[], element, index, elements) => {
          const hasNext = index < elements.length - 1
          const hasPrev = index > 0

          if (index === 0 && element === ' ') {
            return acc
          }
          if (index === elements.length - 1 && element === ' ') {
            return acc
          }
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
              acc.push(this.processElementList(element as unknown as ReactNode[], element as ReactElement))
              break

            case TYPES.REACT_ELEMENT_WITH_CHILDREN:
              acc.push(
                this.processElementList(
                  React.Children.toArray((element as ReactElement).props.children),
                  element as ReactElement
                )
              )
              break

            default:
              acc.push(element)
              break
          }

          return acc
        }, [])

        return React.cloneElement(parent, { children: result })
      }
    }
  }
}

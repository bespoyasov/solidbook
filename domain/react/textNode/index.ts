import { ReactChild, ReactElement } from 'react'
import { getType, TYPES } from '~/domain/react/childType'

class ReactTextNode {
  node: ReactChild
  public constructor(node: ReactChild) {
    this.node = node
  }

  public get firstWord(): string | undefined {
    return ReactTextNode.firstNodeWord(this.node)
  }

  public get lastWord(): string | undefined {
    return ReactTextNode.lastNodeWord(this.node)
  }

  private static firstNodeWord(node: ReactChild): string | undefined {
    return this.getWordByPosition(node, 'first')
  }

  private static lastNodeWord(node: ReactChild): string | undefined {
    return this.getWordByPosition(node, 'last')
  }

  private static getWordByPosition(node: ReactChild, position: 'first' | 'last'): string | undefined {
    switch (getType(node)) {
      case TYPES.NULL:
      case TYPES.BOOLEAN:
      case TYPES.UNDEFINED:
        return undefined

      case TYPES.NUMBER:
        return String(node)

      case TYPES.STRING:
        return position === 'first' ? this.getFirstWord(node as string) : this.getLastWord(node as string)

      case TYPES.ARRAY:
        return position === 'first'
          ? this.firstNodeWord(node[0])
          : this.lastNodeWord(this.lastElement((node as unknown) as Array<any>))

      case TYPES.REACT_ELEMENT_WITH_CHILDREN:
        return position === 'first'
          ? this.firstNodeWord((node as ReactElement).props.children)
          : this.lastNodeWord((node as ReactElement).props.children)

      case TYPES.REACT_ELEMENT_WITHOUT_CHILDREN:
      default:
        return undefined
    }
  }

  private static getFirstWord(str: string) {
    return str.split(' ')[0]
  }

  private static getLastWord(str: string) {
    const wordCount = str.split(' ').length
    return str.split(' ')[wordCount - 1]
  }

  private static lastElement<A>(arr: A[]): A {
    return arr[arr.length - 1]
  }
}

export default ReactTextNode

import { ReactElement, ReactNode } from 'react'

import { getType, TYPES } from '../childType'

export class ReactTextNode {
  node: ReactNode

  public constructor(node: ReactNode) {
    this.node = node
  }

  public get firstWord(): string | undefined {
    return ReactTextNode.firstNodeWord(this.node)
  }

  public get lastWord(): string | undefined {
    return ReactTextNode.lastNodeWord(this.node)
  }

  private static firstNodeWord(node: ReactNode): string | undefined {
    return this.getWordByPosition(node, 'first')
  }

  private static lastNodeWord(node: ReactNode): string | undefined {
    return this.getWordByPosition(node, 'last')
  }

  private static getWordByPosition(node: ReactNode, position: 'first' | 'last'): string | undefined {
    switch (getType(node)) {
      case TYPES.NUMBER:
        return String(node)

      case TYPES.STRING:
        return position === 'first' ? this.getFirstWord(node as string) : this.getLastWord(node as string)

      case TYPES.ARRAY:
        return position === 'first'
          ? this.firstNodeWord(node[0])
          : this.lastNodeWord(this.lastElement(node as unknown as ReactNode[]))

      case TYPES.REACT_ELEMENT_WITH_CHILDREN:
        return position === 'first'
          ? this.firstNodeWord((node as ReactElement).props.children)
          : this.lastNodeWord((node as ReactElement).props.children)

      default:
        return undefined
    }
  }

  private static getFirstWord(str: string) {
    return str.split(' ')[0]
  }

  private static getLastWord(str: string) {
    const words = str.split(' ')
    return words[words.length - 1]
  }

  private static lastElement<A>(arr: A[]): A {
    return arr[arr.length - 1]
  }
}

import { ReactChild } from 'react'

class ReactTextNode {
  node: ReactChild
  public constructor(node: ReactChild) {
    this.node = node
  }

  public get firstWord(): string {
    return ReactTextNode.firstNodeWord(this.node)
  }

  public get lastWord(): string {
    return ReactTextNode.lastNodeWord(this.node)
  }

  private static firstNodeWord(node: ReactChild): string {
    return this.getWordByPosition(node, 'first')
  }

  private static lastNodeWord(node: ReactChild): string {
    return this.getWordByPosition(node, 'last')
  }

  private static getWordByPosition(node: ReactChild, position: 'first' | 'last'): string {
    if (typeof node === 'string') {
      return position === 'first' ? this.getFirstWord(node) : this.getLastWord(node)
    } else if (Array.isArray(node)) {
      return position === 'first' ? this.firstNodeWord(node[0]) : this.lastNodeWord(this.lastElement(node))
    } else if (typeof node === 'number') {
      return String(node)
    } else if (node.props.children === 'string') {
      return position === 'first' ? this.getFirstWord(node.props.children) : this.getLastWord(node.props.children)
    } else if (Array.isArray(node.props.children)) {
      return position === 'first'
        ? this.firstNodeWord(node.props.children[0])
        : this.lastNodeWord(this.lastElement(node.props.children))
    } else {
      return position === 'first' ? this.firstNodeWord(node.props.children) : this.lastNodeWord(node.props.children)
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

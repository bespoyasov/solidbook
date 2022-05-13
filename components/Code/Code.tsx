import React, { PropsWithChildren, PureComponent } from 'react'
import { refractor } from 'refractor'
import { rehype } from 'rehype'

type CodeProps = {
  lang?: string
}

export class Code extends PureComponent<PropsWithChildren<CodeProps>> {
  static defaultProps = {
    lang: 'ts'
  }

  highlight = (source: string) => {
    const { lang } = this.props
    return rehype().stringify(refractor.highlight(source, lang)).toString()
  }

  createCodeElement = (innerHtml: string) => {
    return React.createElement('code', {
      dangerouslySetInnerHTML: {
        __html: innerHtml
      }
    })
  }

  render() {
    const { children } = this.props

    return (
      <pre>
        {React.Children.map(children, (child) => {
          if (typeof child === 'number' || typeof child === 'boolean') return child
          if (typeof child === 'string') return this.createCodeElement(this.highlight(child))

          if (!('props' in child)) return child
          if (child.props?.originalType && child.props.originalType !== 'code') return child
          return this.createCodeElement(this.highlight(child.props.children))
        })}
      </pre>
    )
  }
}

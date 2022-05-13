import React, { PureComponent } from 'react'
import { refractor } from 'refractor'
import { rehype } from 'rehype'

type CodeProps = {
  children?: JSX.Element
  lang: string
}

export class Code extends PureComponent<CodeProps> {
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
        {React.Children.map(children, (child: React.ReactElement): React.ReactElement => {
          if (child.props?.originalType && child.props.originalType !== 'code') return child
          if (typeof child === 'string') return this.createCodeElement(this.highlight(child))
          return this.createCodeElement(this.highlight(child.props.children))
        })}
      </pre>
    )
  }
}

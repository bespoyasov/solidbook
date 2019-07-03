import * as React from 'react'
import { PureComponent } from 'react'
import refractor from 'refractor'
import rehype from 'rehype'
import 'prismjs/themes/prism.css'
import './override.css'

type Props = {
  children?: React.ReactNode
  lang: string
}

class Code extends PureComponent<Props> {
  static defaultProps = {
    lang: 'ts'
  }

  highlight = (source: React.ReactElement) => {
    return rehype()
      .stringify({
        type: 'root',
        children: refractor.highlight(source, this.props.lang)
      })
      .toString()
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
        {React.Children.map(
          children,
          (child: React.ReactElement): React.ReactElement => {
            if (child.props && child.props.name !== 'code') return child
            if (typeof child === 'string') return this.createCodeElement(this.highlight(child))
            return this.createCodeElement(this.highlight(child.props.children))
          }
        )}
      </pre>
    )
  }
}

export default Code

import * as React from 'react'
import { PureComponent } from 'react'
import refractor from 'refractor'
import rehype from 'rehype'
import 'prismjs/themes/prism.css'

type Props = {
  children?: React.ReactNode
  lang: string
}

class Code extends PureComponent<Props> {
  static defaultProps = {
    lang: 'ts'
  }

  render() {
    const { children, lang } = this.props

    return (
      <pre>
        {React.Children.map(
          children,
          (child: React.ReactElement): React.ReactElement => {
            if (child.props.name !== 'code') return child

            return React.createElement('code', {
              ...child.props.props,
              dangerouslySetInnerHTML: {
                __html: rehype()
                  .stringify({
                    type: 'root',
                    children: refractor.highlight(child.props.children, lang)
                  })
                  .toString()
              }
            })
          }
        )}
      </pre>
    )
  }
}

export default Code

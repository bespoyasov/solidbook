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
        {lang ? (
          <code
            className={`language-${lang}`}
            dangerouslySetInnerHTML={{
              __html: rehype()
                .stringify({
                  type: 'root',
                  children: refractor.highlight(children, lang)
                })
                .toString()
            }}
          />
        ) : (
          <code>{children}</code>
        )}
      </pre>
    )
  }
}

export default Code

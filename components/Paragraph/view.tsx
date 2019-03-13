import React, { PureComponent } from 'react'
import Typograf from 'typograf'

class Paragraph extends PureComponent {
  typograf = new Typograf({ locale: ['ru', 'en-US'] })

  renderWithReact() {
    const { children } = this.props

    return (
      <p>
        {React.Children.map(children, child => {
          if (typeof child === 'string') {
            return [
              child.startsWith(' ') ? ' ' : '',
              this.typograf.execute(child),
              child.endsWith(' ') ? ' ' : ''
            ].join('')
          } else {
            return child
          }
        })}
      </p>
    )
  }
  render() {
    return this.renderWithReact()
  }
}

export default Paragraph

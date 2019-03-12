import React, { PureComponent } from 'react'
import Typograf from 'typograf'

class Paragraph extends PureComponent {
  typograf = new Typograf({ locale: ['ru', 'en-US'] })
  render() {
    const { children } = this.props
    console.log(children)
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
}

export default Paragraph

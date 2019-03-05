import * as React from 'react'
import { PureComponent } from 'react'
import Link from 'next/link'

interface Props {
  href: string
  children: React.ReactChild
}

class NavigationItem extends PureComponent<Props> {
  render() {
    const { href, children } = this.props
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    )
  }
}

export default NavigationItem

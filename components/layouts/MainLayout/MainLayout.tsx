import * as React from 'react'
import { PureComponent } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
  children?: React.ReactNode
}

class MainLayout extends PureComponent<Props> {
  static defaultProps = {
  }
  render() {
    const { title, children } = this.props
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
            |
            <Link href="/about">
              <a>About</a>
            </Link>{' '}
            |
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav>
        </header>

        {children}

        <footer>{'I`m here to stay'}</footer>
      </div>
    )
  }
}

export default MainLayout

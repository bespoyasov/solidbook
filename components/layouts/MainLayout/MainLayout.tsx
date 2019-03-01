import * as React from 'react'
import { PureComponent } from 'react'
import Head from 'next/head'
import MainContent from '../../MainContent'

type Props = {
  title?: string
  children?: React.ReactNode
}

class MainLayout extends PureComponent<Props> {
  static defaultProps = {}
  render() {
    const { title, children } = this.props
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>

        <MainContent>{children}</MainContent>
      </div>
    )
  }
}

export default MainLayout

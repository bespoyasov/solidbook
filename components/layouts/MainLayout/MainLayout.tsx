import * as React from 'react'
import { PureComponent } from 'react'
import Head from 'next/head'
import Navigation from '../../Navigation'
import Header from '../../Header'
import Center from '../Center'

import { Grid, MainContent } from './style'

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

        <Header />

        <Center>
          <Grid>
            <Navigation />
            <MainContent>{children}</MainContent>
          </Grid>
        </Center>

        <footer>
          <Center>I`m here to stay</Center>
        </footer>
      </div>
    )
  }
}

export default MainLayout

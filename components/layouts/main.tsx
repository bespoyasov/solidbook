import * as React from 'react'
import { PureComponent } from 'react'
import Head from 'next/head'
import Navigation from 'components/Navigation'
import { MDXProvider } from '@mdx-js/tag'
import styled from 'styled-components'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Center from './Center'
import Abbr from 'components/Formatters/Abbr'
import Paragraph from 'components/Paragraph';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2.5rem 0;
  align-items: flex-start;
`

const MainContent = styled.main`
  flex: 1;

  section + section {
    margin-top: 2.5rem;
  }
`

type IProps = {
  meta: {
    title: string
  }
  children?: React.ReactNode
}

class MainLayout extends PureComponent<IProps> {
  static defaultProps = {}
  render() {
    const { meta = { title: 'Solid' }, children } = this.props

    return (
      <div>
        <Head>
          <title>{meta.title}</title>
        </Head>

        <Header />

        <Center>
          <Grid>
            <Navigation />
            <MDXProvider components={{ abbr: Abbr, p: Paragraph }}>
              <MainContent>{children}</MainContent>
            </MDXProvider>
          </Grid>
        </Center>

        <Footer />
      </div>
    )
  }
}

export default MainLayout

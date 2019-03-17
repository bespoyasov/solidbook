import * as React from 'react'
import { PureComponent } from 'react'
import Head from 'next/head'
import Navigation from '~/components/Navigation'
import { MDXProvider } from '@mdx-js/tag'
import styled from 'styled-components'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Center from './Center'
import Paragraph from '~/components/Paragraph';
import Abbr from '~/components/Formatters/Abbr'
import Code from '~/components/Code'

const Grid = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  display: grid;
  align-items: start;
  grid-template-columns: 33% auto;

  @media (max-width: ${props => props.theme.adaptiveBreakpoint}) {
    grid-template-columns: auto;
  }
`

const MainContent = styled.main`
  flex: 1;

  section + section {
    margin-top: 1.5rem;
  }
`

type Props = {
  meta: {
    title: string
  }
  children?: React.ReactNode
}

class MainLayout extends PureComponent<Props> {
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
            <MDXProvider components={{ abbr: Abbr, pre: Code, p: Paragraph }}>
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

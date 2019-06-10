import * as React from 'react'
import { PureComponent } from 'react'
import Head from 'next/head'
import Navigation from '~/components/Navigation'
import { MDXProvider } from '@mdx-js/tag'
import styled from 'styled-components'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Center from './Center'
import Paragraph from '~/components/Paragraph'
import PrevNext from '~/components/PrevNext'
import Abbr from '~/components/Formatters/Abbr'
import Code from '~/components/Code'

const Grid = styled.div`
  width: 100%;
  padding: 2.5rem 0 0;
  display: grid;
  align-items: start;
  grid-template-columns: 34% 66%;

  @media (max-width: ${props => props.theme.breakpoint}) {
    grid-template-columns: 100%;
    padding-top: 1.5rem;
  }
`

const MainContent = styled.main`
  section > section {
    margin-top: 1.6rem;
  }
`

type Props = {
  meta: {
    title: string
    description?: string
  }
  children?: React.ReactNode
}

class MainLayout extends PureComponent<Props> {
  static defaultProps = {}
  render() {
    const { meta = { title: 'Solid', description: '' }, children } = this.props

    return (
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Head>

        <Header />

        <Center>
          <Grid>
            <Navigation />
            <div>
              <MDXProvider components={{ abbr: Abbr, pre: Code, p: Paragraph }}>
                <MainContent>{children}</MainContent>
              </MDXProvider>
              <PrevNext />
            </div>
          </Grid>
        </Center>

        <Footer />
      </div>
    )
  }
}

export default MainLayout

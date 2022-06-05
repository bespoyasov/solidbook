import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { Center } from './Center'
import { Code } from '~/components/Code'
import { Footer } from '~/components/Footer'
import { Abbr } from '~/components/Formatters/Abbr'
import { Header } from '~/components/Header'
import { Navigation } from '~/components/Navigation'
import { Paragraph } from '~/components/Paragraph'
import { PrevNext } from '~/components/PrevNext'
import { ThemeToggle } from '~/components/ThemeToggle'

const Grid = styled.div`
  width: 100%;
  padding: 2.5rem 0 0;
  display: grid;
  align-items: start;
  grid-template-columns: 34% 66%;

  @media (max-width: ${(props) => props.theme.breakpoint}) {
    grid-template-columns: 100%;
    padding-top: 1.2rem;
  }
`

const MainContent = styled.main`
  section > section {
    margin-top: 1.6rem;
  }
`

const Aside = styled.div`
  position: sticky;
  top: 20px;

  @media (max-width: ${(props) => props.theme.breakpoint}) {
    position: relative;
    top: auto;
  }
`

const ToggleContainer = styled.div`
  margin: -25px 0 0 22px;
  position: relative;
  z-index: 1;

  @media (max-width: ${(props) => props.theme.breakpoint}) {
    position: absolute;
    top: -10px;
    right: 0;
    margin: 0;
  }
`

type Props = {
  meta: {
    title: string
    description?: string
  }
  children?: React.ReactNode
}

export class MainLayout extends PureComponent<Props> {
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
            <Aside>
              <Navigation />
              <ToggleContainer>
                <ThemeToggle />
              </ToggleContainer>
            </Aside>
            <div>
              <MDXProvider
                components={{
                  abbr: Abbr,
                  pre: Code,
                  p: Paragraph
                }}
              >
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

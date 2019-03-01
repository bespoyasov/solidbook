import * as React from 'react'
import styled from 'styled-components'
import { PureComponent } from 'react'
import Head from 'next/head'
import Header from '../../Header'
import Center from '../Center'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2.6rem 0;
`

const Nav = styled.nav`
  width: 30%;
  max-width: 280px;
`

const MainContent = styled.main`
  flex: 1;
`

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
            <Nav>Здесь будет содержание</Nav>
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

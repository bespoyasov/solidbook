import styled from 'styled-components'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2.5rem 0;
`

export const Nav = styled.nav`
  width: 30%;
  max-width: 280px;
`

export const MainContent = styled.main`
  flex: 1;

  h1 {
    margin-top: 0;
  }

  section + section {
    margin-top: 2.5rem;
  }
`

import styled from 'styled-components'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2.5rem 0;
  align-items: flex-start;
`

export const MainContent = styled.main`
  flex: 1;

  section + section {
    margin-top: 2.5rem;
  }
`

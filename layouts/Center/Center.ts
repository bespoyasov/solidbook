import styled from 'styled-components'

export const Center = styled.div`
  max-width: 1100px;
  padding: 0 2rem;
  margin: auto;

  @media (max-width: ${props => props.theme.breakpoint}) {
    padding: 0 1rem;
  }
`

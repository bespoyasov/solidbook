import styled from 'styled-components'

export const Wrapper = styled.footer`
  border-top: 1px solid ${props => props.theme.decorationColorSecondary};
  padding: 1rem 0 1.1rem;

  @media (max-width: ${props => props.theme.breakpoint}) {
    padding: 0.5rem 0 0.8rem;
    font-size: ${props => props.theme.fontSizeTiny};
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoint}) {
    display: block;

    span {
      display: block;
    }
  }
`

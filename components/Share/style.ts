import styled from 'styled-components'
import 'ilyabirman-likely/release/likely.css'

export const Container = styled.div`
  position: relative;

  .likely__button,
  .likely__counter {
    display: none !important;
  }
`

export const Label = styled.div`
  @media (max-width: ${props => props.theme.breakpoint}) {
    display: none;
  }
`

export const Buttons = styled.div`
  line-height: 1rem;
  height: 30px;
`

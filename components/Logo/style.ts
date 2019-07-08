import styled from 'styled-components'

export default styled.div`
  font-size: 2.3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  svg {
    width: 100px;
  }

  a path {
    stroke: ${props => props.theme.textColorPrimary};
  }

  a:hover path {
    stroke: ${props => props.theme.linkHoverColor};
  }

  @media (max-width: ${props => props.theme.breakpoint}) {
    font-size: 2rem;

    svg {
      width: 70px;
    }
  }
`

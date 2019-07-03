import styled from 'styled-components'

export default styled.div`
  font-size: 2.3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  a,
  a:visited {
    color: ${props => props.theme.textColorPrimary};
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.linkHoverColor};
  }

  @media (max-width: ${props => props.theme.breakpoint}) {
    font-size: 2rem;
  }
`

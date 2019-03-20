import styled from 'styled-components'

export default styled.div`
  font-size: 2.3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  a,
  a:visited {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #fb3347;
  }

  @media (max-width: ${props => props.theme.breakpoint}) {
    font-size: 2rem;
  }
`

import styled from 'styled-components'

export default styled.figure`
  width: auto;
  max-width: 100%;
  text-align: left;
  margin: 0 0 1rem 0;

  img {
    max-width: 100%;
  }

  figcaption {
    font-style: italic;
    color: ${props => props.theme.grey};
  }
`

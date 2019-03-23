import styled from 'styled-components'

export default styled.figure`
  width: auto;
  max-width: 100%;
  text-align: center;
  margin: 1.5rem 0 2rem;

  img {
    max-width: 100%;
  }

  figcaption {
    font-style: italic;
    color: ${props => props.theme.grey};
    font-size: ${props => props.theme.fontSizeSmall};
    line-height: 1.4;
  }
`

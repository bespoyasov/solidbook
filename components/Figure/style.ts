import styled from 'styled-components'

export default styled.figure`
  width: auto;
  max-width: 100%;
  text-align: left;
  margin: 0 0 1.25rem;

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

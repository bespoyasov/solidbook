import styled from 'styled-components'

export const Figure = styled.figure`
  width: auto;
  max-width: 100%;
  text-align: center;
  margin: 1.5rem 0 2rem;

  img {
    max-width: 100%;

    ${props =>
      props.theme.using === 'dark' &&
      `
      border-radius: ${props.theme.radius};
      background: ${props.theme.imageBackground};
    `}
  }

  figcaption {
    font-style: italic;
    color: ${props => props.theme.textColorSecondary};
    font-size: ${props => props.theme.fontSizeTiny};
    line-height: 1.4;
    max-width: 500px;
    margin: auto;
  }
`

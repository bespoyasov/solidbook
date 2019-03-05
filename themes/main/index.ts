import { createGlobalStyle } from 'styled-components'

export const theme = {
  blue: '#0000fe',
  purple: '#542189',
  red: '#fb3347',

  font: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`
}

export const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    font-family: ${theme.font};
    font-size: 1rem;
    line-height: 1.65;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  p,
  ul {
    margin: 0 0 1rem 0;
  }

  h1,
  h2 {
    margin: 0 0 0.25rem 0;
  }

  p + ul {
    margin-top: -1rem;
  }

  h1 {
    font-size: 2em;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.5em;
    line-height: 1.3;
  }

  a {
    color: ${theme.blue};
  }

  a:visited {
    color: ${theme.purple};
  }

  a:hover {
    color: ${theme.red};
  }
`

import { createGlobalStyle } from 'styled-components'

export const theme = {
  blue: '#0000fe',
  purple: '#542189',
  red: '#fb3347',

  lightestGrey: 'rgba(0, 0, 0, 0.06)',
  lightGrey: 'rgba(0, 0, 0, 0.12)',
  grey: 'rgba(0, 0, 0, 0.3)',
  lightGreyOpaque: '#f0f0f0',

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

  h3 {
    font-size: .8em;
    text-transform: uppercase;
    letter-spacing: 0.15em;
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

  code {
    font-size: 1em;
    font-family: monospace;
  }

  p code {
    display: inline-block;
    background: rgba(0,0,0,.08);
    padding: 0.01em 0.4em;
    border-radius: 0.3em;
  }
`

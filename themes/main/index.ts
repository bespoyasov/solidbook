import { createGlobalStyle } from 'styled-components'

export const theme = {
  blue: '#0000fe',
  purple: '#542189',
  red: '#fb3347',
  green: '#36bc54',

  lightestGrey: 'rgba(0, 0, 0, 0.06)',
  lightGrey: 'rgba(0, 0, 0, 0.12)',
  grey: 'rgba(0, 0, 0, 0.3)',

  lightGreyOpaque: '#f0f0f0',
  lightBlueOpaque: '#f5f7ff',

  radius: '0.3em',

  font: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  fontMonospace: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,

  fontSizeRegular: `1rem`,
  fontSizeSmall: `0.9rem`,
  fontSizeTiny: `0.8rem`,
  breakpoint: '800px'
}

export const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    font-family: ${theme.font};
    font-size: 1rem;
    line-height: 1.5;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  p,
  ul,
  pre {
    margin: 0 0 1rem 0;
  }

  h1,
  h2 {
    margin: 0 0 0.5rem 0;
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
    margin:0;
    font-size: 1rem;
    font-weight: 700;
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
    font-size: 0.8em;
    font-style: normal;
    font-weight: 400;
    font-family: ${theme.fontMonospace};
  }

  p code {
    display: inline-block;
    background: ${theme.lightBlueOpaque};
    padding: 0.01em 0.4em;
    border-radius: ${theme.radius};
  }

  pre {
    display: block;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background: ${theme.lightBlueOpaque};
    border-radius: ${theme.radius};
    padding: 0.8em;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.1)
  }
`

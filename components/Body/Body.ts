import styled from 'styled-components'

export default styled.body`
  background: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  font-feature-settings: 'kern';
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  h1,
  h2,
  p,
  ul {
    margin: 1rem 0;
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
    color: #0000fe;
  }

  a:visited {
    color: #542189;
  }

  a:hover {
    color: #fb3347;
  }
`

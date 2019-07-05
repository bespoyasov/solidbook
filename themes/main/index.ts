import { createGlobalStyle, ThemeProps } from 'styled-components'
import { theme as light } from '../light'
import { theme as dark } from '../dark'
import { common } from '../common'

export const defaultTheme = {
  ...common,
  ...light,
  using: 'light'
}

export const darkTheme = {
  ...common,
  ...dark,
  using: 'dark'
}

export const themes = {
  dark: darkTheme,
  light: defaultTheme
}

export type MainTheme = typeof defaultTheme
export type MainThemeProps = ThemeProps<typeof defaultTheme>

export const GlobalStyle = createGlobalStyle<MainThemeProps>`
  body {
    color: ${({ theme }) => theme.textColorPrimary};
    background: ${({ theme }) => theme.pageBackground};
    font-family: ${({ theme }) => theme.font};
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
    color: ${({ theme }) => theme.linkColor};
  }

  a:visited {
    color: ${({ theme }) => theme.linkVisitedColor};
  }

  a:hover {
    color: ${({ theme }) => theme.linkHoverColor};
  }

  code,
  code[class*="language-"] {
    font-size: 0.8em;
    font-style: normal;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fontMonospace};
  }

  p code {
    display: inline-block;
    background: ${({ theme }) => theme.codeBackground};
    padding: 0.01em 0.4em;
    border-radius: ${({ theme }) => theme.radius};
  }

  pre {
    display: block;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background: ${({ theme }) => theme.codeBackground};
    border-radius: ${({ theme }) => theme.radius};
    padding: 0.8em;
    box-shadow: inset 0 1px 3px ${({ theme }) => theme.decorationColorPrimary};
  }
`

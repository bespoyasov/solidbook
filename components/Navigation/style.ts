import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 0 30px 2rem 0;
  max-width: 320px;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    width: 1px;
    top: 0;
    bottom: 0;
    left: 7px;
    background: ${props => props.theme.decorationColorSecondary};
    z-index: -1;
  }

  @media (max-width: ${props => props.theme.breakpoint}) {
    position: relative;
    padding: 0;
    margin-bottom: 2rem;
    max-width: 100%;

    &::before {
      left: 0;
      top: 85px;
    }
  }
`

export const Section = styled.div`
  margin: 1.5rem 0 0 0;
  padding: 0 0 0 25px;
  font-size: ${props => props.theme.fontSizeSmall};

  a,
  a:visited {
    color: ${props => props.theme.textColorPrimary};
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.linkHoverColor};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    line-height: 1.2em;
    margin: 0.8em 0;
  }

  h3 {
    margin-top: 0;
  }

  @media (max-width: ${props => props.theme.breakpoint}) {
    padding-left: 15px;
    margin-top: 0;

    h3 {
      margin-left: -18px;
    }
  }
`

export const SubSection = styled.div`
  padding-left: 1.25em;
  margin-bottom: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoint}) {
    padding-left: 0;
  }
`

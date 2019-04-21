import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 1rem 0 1.2rem;
  margin: 3rem 0 0;
  line-height: 1.2em;
  border-top: 1px solid ${props => props.theme.lightestGrey};

  @media (max-width: ${props => props.theme.breakpoint}) {
    padding: 0.8rem 0 1rem;
    font-size: ${props => props.theme.fontSizeTiny};
    flex-wrap: wrap;
  }
`

export const Column = styled.div`
  width: 50%;

  &:last-child {
    text-align: right;
  }

  a {
    &::before,
    &::after {
      display: inline-block;
    }
  }

  &:first-child a:before {
    padding-right: 0.2em;
    content: '←';
  }
  &:last-child a:after {
    padding-left: 0.2em;
    content: '→';
  }

  @media (max-width: ${props => props.theme.breakpoint}) {
    width: 100%;
    margin: 0.2em 0;

    &:last-child {
      text-align: left;
      padding-left: 1em;
    }
  }
`

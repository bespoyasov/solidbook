import styled from 'styled-components'

export const Container = styled.article`
  position: relative;
  padding: 1.2rem 25px 1.4rem;
  border-radius: 7px;
  box-shadow: 0 2px 10px ${props => props.theme.lightGrey};
  color: ${props => props.theme.grey};
  background: white;
  font-size: ${props => props.theme.fontSizeSmall};
  line-height: 1.6;
  text-align: left;

  @media (max-width: ${props => props.theme.breakpoint}) {
    box-shadow: none;
    padding: 0 1rem 10px;
    margin: -0.6rem -1rem 1rem;
    border-bottom: 1px solid ${props => props.theme.lightestGrey};
    border-radius: 0;
  }
`

export const Counter = styled.div`
  @media (min-width: ${props => props.theme.breakpoint}) {
    margin-bottom: 1rem;
  }
`

export const Label = styled.div`
  @media (max-width: ${props => props.theme.breakpoint}) {
    display: inline-block;
    margin-right: 0.4em;
  }
`

export const Big = styled.big`
  font-size: 2.5em;
  line-height: 0.8;
  vertical-align: text-top;
  font-weight: 700;
  color: black;

  @media (max-width: ${props => props.theme.breakpoint}) {
    font-size: 1em;
    line-height: 1;
    vertical-align: baseline;
  }
`

export const ShareContainer = styled.div`
  @media (max-width: ${props => props.theme.breakpoint}) {
    position: absolute;
    right: 1rem;
    top: -3.6rem;
  }
`

import styled from 'styled-components'

export const Container = styled.article`
  position: relative;
  padding: 1.2rem 25px 1rem;
  border-radius: 7px;
  box-shadow: 0 2px 10px ${props => props.theme.lightGrey};
  color: ${props => props.theme.grey};
  background: white;
  font-size: ${props => props.theme.fontSizeSmall};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoint}) {
    box-shadow: none;
    position: absolute;
    right: 0;
    padding: 0;
    top: -0.2em;
  }
`

export const Big = styled.big`
  display: block;
  font-size: 2.5em;
  line-height: 1;
  font-weight: 700;
  color: black;

  @media (max-width: ${props => props.theme.breakpoint}) {
    font-size: 1em;
    display: inline-block;
    margin-right: 0.25em;
  }
`

export const Emoji = styled.span`
  display: inline-block;
  min-width: 1.5em;
`

export const Share = styled.button`
  border: 0;
  background: none;
  vertical-align: middle;
  cursor: pointer;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  img {
    width: 18px;
    height: 16px;
  }

  @media (max-width: ${props => props.theme.breakpoint}) {
    display: none;
  }
`

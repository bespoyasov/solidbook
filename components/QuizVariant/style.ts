import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  user-select: none;
  cursor: pointer;
  padding: 0.5em 2.2em 0.5em 0.8em;
  position: relative;
  border: 1px solid ${props => props.theme.lightGrey};
  border-radius: ${props => props.theme.radius};
  line-height: 1.4;

  &:hover,
  &:focus-within {
    background: ${props => props.theme.lightBlueOpaque};
  }

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0.3em;
    right: 0.3em;
  }

  &.selected {
    border-color: black;

    &.completed::after {
      content: '🚫';
    }
    &.completed.correct::after {
      content: '✅';
    }
  }

  &.completed {
    cursor: default;

    &:hover,
    &:focus-within {
      background: none;
    }
  }
`

export const Description = styled.div`
  font-style: italic;
  color: ${props => props.theme.grey};
  line-height: 1.4;

  &:not(:empty) {
    padding-top: 0.5em;
  }
`

export const Item = styled.div`
  margin: 0 0 1.2rem 0;
`

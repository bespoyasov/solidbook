import styled from 'styled-components'

export const Item = styled.label`
  display: block;
  user-select: none;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  margin: 0 0 1rem 0;
  position: relative;
  border: 1px solid ${props => props.theme.lightGrey};
  border-radius: ${props => props.theme.radius};
  line-height: 1.25;

  &:hover,
  &:focus-within {
    background: ${props => props.theme.lightBlueOpaque};
  }

  &.selected {
    border-color: black;
  }
`

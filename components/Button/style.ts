import styled from 'styled-components'

export default styled.button`
  border: 0;
  background: black;
  color: white;
  border-radius: ${props => props.theme.radius};
  padding: 0.6em 1.5em;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizeRegular};
  margin: 0;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  }

  &:active,
  &:active:hover {
    box-shadow: none;
    transform: translateY(1px);
  }
`

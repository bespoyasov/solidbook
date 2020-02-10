import styled from 'styled-components'

export const Button = styled.button`
  border: 0;
  background: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonColor};
  border-radius: ${props => props.theme.radius};
  padding: 0.6em 1.5em;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizeRegular};
  margin: 0;

  &:hover {
    box-shadow: 0 2px 10px ${props => props.theme.decorationColorTetriary};
  }

  &:active,
  &:active:hover {
    box-shadow: none;
    transform: translateY(1px);
  }

  &:disabled {
    cursor: auto;
    color: ${props => props.theme.disabledButtonColor};
  }
  &:disabled:hover {
    box-shadow: none;
  }
`

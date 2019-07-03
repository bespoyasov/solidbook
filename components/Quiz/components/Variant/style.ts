import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  user-select: none;
  cursor: pointer;
  padding: 0.5em 2.2em 0.5em 0.8em;
  position: relative;
  border: 1px solid ${props => props.theme.decorationColorPrimary};
  border-radius: ${props => props.theme.radius};
  line-height: 1.4;
  max-width: calc(100vw - 2rem);

  &:hover,
  &:focus-within {
    background: ${props => props.theme.variantHoverBackground};
  }

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0.3em;
    right: 0.3em;
  }

  &.selected {
    border-color: ${props => props.theme.variantSelectedBorderColor};
  }

  &.completed {
    cursor: default;

    &::after {
      content: '🚫';
    }
    &.correct::after {
      content: '✅';
    }

    &:hover,
    &:focus-within {
      background: none;
    }
  }
`

export const Description = styled.div`
  font-style: italic;
  color: ${props => props.theme.textColorSecondary};
  line-height: 1.4;
  padding-top: 0.5em;
`

export const Item = styled.div`
  margin: 0 0 1rem 0;

  p:last-child {
    margin-bottom: 0;
  }
`

export const CodeWrapper = styled.div`
  margin-top: 0.5em;

  pre {
    margin: 0 -1.4rem 0.25em 0;
    box-shadow: inset 0 0 1px ${props => props.theme.decorationColorPrimary};
  }
`

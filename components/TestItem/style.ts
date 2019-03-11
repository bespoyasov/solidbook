import styled from 'styled-components'
import { Style as VisuallyHidden } from 'components/VisuallyHidden'

export const Item = styled.label`
  display: block;
  user-select: none;
  cursor: pointer;
  padding: 0.3em 0.6em;
  margin-bottom: 0.5em;
  position: relative;

  input {
    ${VisuallyHidden}
  }

  .indicator {
    border: 1px solid ${props => props.theme.lightGrey};
    border-radius: 0.3em;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
  }

  input:checked + .indicator {
    border-color: ${props => props.theme.black};
    background: rgba(0, 0, 0, 0.025);
  }

  input:focus + .indicator,
  &:hover .indicator {
    border-color: ${props => props.theme.blue};
  }
`

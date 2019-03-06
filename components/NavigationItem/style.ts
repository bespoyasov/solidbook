import styled from 'styled-components'

export default styled.div`
  position: relative;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: -21px;
    top: 5px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${props => props.theme.lightGreyOpaque};
  }

  &.active {
    font-weight: 700;
  }

  &.active::before {
    background: black;
  }
`

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

  &.contains-active::before {
    background: black;
  }

  &.completed::before {
    width: 15px;
    height: 15px;
    left: -25px;
    top: 1px;
    text-align: center;
    font-size: 0.8rem;
    line-height: 1.2;
    content: '✓';
    color: white;
    background: ${props => props.theme.green};
  }

  &.deep::before {
    display: none;
  }
`

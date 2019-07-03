import styled from 'styled-components'

export default styled.div`
  position: relative;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: -18px;
    top: 5px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${props => props.theme.navBorderColor};
  }

  &.active {
    font-weight: 700;
  }

  &.contains-active {
    font-weight: 400;
  }

  &.active::before,
  &.contains-active::before {
    background: ${props => props.theme.navActiveItemBackground};
  }

  &.completed::before {
    background: ${props => props.theme.navCompletedDecorationBackground};
  }

  &.deep::before {
    display: none;
  }

  @media (min-width: ${props => props.theme.breakpoint}) {
    &:before {
      left: -21px;
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
      color: ${props => props.theme.navCompletedDecorationColor};
    }
  }
`

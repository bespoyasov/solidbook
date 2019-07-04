import styled from 'styled-components'

export const Container = styled.div``

export const Toggle = styled.label`
  display: flex;
  align-items: center;
  margin: -25px 0 0 22px;
  position: relative;
  cursor: pointer;
  z-index: 1;

  &::before,
  &::after {
    opacity: 0.7;
    will-change: opacity;
    transition: opacity 0.2s;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }

  &::before {
    content: '☀️';
    margin-right: 5px;
  }
  &::after {
    margin-left: 5px;
    content: '🌙';
  }
`

export const Shaft = styled.span`
  width: 40px;
  height: 20px;
  border: 2px solid ${props => props.theme.decorationColorTetriary};
  border-radius: 2em;
  position: relative;
`

export const Trolley = styled.span`
  width: 16px;
  height: 12px;
  background: ${props => props.theme.decorationColorTetriary};
  border-radius: 2em;
  position: absolute;
  left: 2px;
  top: 2px;
  transform: translateX(0);
  transition: transform 0.2s;
  will-change: transform;

  &.active {
    transform: translateX(100%);
  }
`

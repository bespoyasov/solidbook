import * as React from 'react'
import styled from 'styled-components'

const svgCirclePath =
  `M 50,50 m 0,-47.916665 ` +
  `a 47.916665,47.916665 0 1 1 0,95.83333 ` +
  `a 47.916665,47.916665 0 1 1 0,-95.83333`

type Props = {
  total: number
  today: number
}

type State = {
  animationName: string
}

class CircleProgress extends React.PureComponent<Props, State> {
  state = {
    animationName: `animation_none`
  }

  stroke = (val: number) => {
    const diameter = Math.PI * 2 * 47.916665
    return (val * diameter) / 100
  }

  addAnimation() {
    const animationName = `animation_${Math.floor(Math.random() * 100000)}`
    let styleSheet = document.styleSheets[0] as CSSStyleSheet
    let keyframes = `
      @keyframes ${animationName} {
        0% {
          opacity: 0;
          stroke-dashoffset: ${this.stroke(-1 * (this.props.total + 0.03) * 100)}px;
          stroke-dasharray: 0.5px, 300px;
        }
        10%,99.9% {
          stroke-dashoffset: ${this.stroke(-1 * (this.props.total) * 100)}px;
          stroke-dasharray: 2px, 300px;
          opacity: 1;
        }
        99.9%,100%{
          stroke-dashoffset: ${this.stroke(-1 * (this.props.total) * 100)}px;
          stroke-dasharray: 2px, 300px;
          opacity: 0;
        }
      }`
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
    this.setState({ animationName })
  }

  componentDidMount() {
    this.addAnimation()
  }

  render() {
    const { animationName } = this.state
    return (
      <Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            d={svgCirclePath}
            strokeWidth="4.16667"
            fill="none"
            stroke="#fff"
            strokeOpacity="0.25"
          />


          <path
            d={svgCirclePath}
            strokeWidth="4.16667"
            fill="none"
            style={{
              strokeDashoffset: 0,
              strokeDasharray: `${this.stroke(
                (this.props.total - this.props.today) * 100
              )}px, ${this.stroke(100 - (this.props.total - this.props.today) * 100)}px`
            }}
            stroke="#fff"
          />

          <path
            d={svgCirclePath}
            strokeWidth="4.16667"
            fill="none"
            style={{
              strokeDashoffset: `${this.stroke(
                -1 * (this.props.total - this.props.today) * 100
              )}px`,
              strokeDasharray: `${this.stroke(this.props.today * 100)}px, ${this.stroke(
                100 - this.props.today * 100
              )}px`
            }}
            stroke="#6aeb24"
          />

          <Path
            animationName={animationName}
            d={svgCirclePath}
            strokeWidth="4.16667"
            fill="none"
            stroke="#6aeb24"
          />

          <rect x="50" y="0" width="0.5" height="5" fill="#3870c6" />
        </svg>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 240px;
  height: 240px;
`

type PathProps = {
  animationName: string
}

const Path = styled<PathProps, 'path'>('path')`
  animation: ${p => p.animationName} 1.7s ease-out infinite;
`

export default CircleProgress

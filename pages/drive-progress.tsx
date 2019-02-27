import * as React from 'react'
import styled from 'styled-components'
import CircleProgress from 'components/CircleProgress'

class DriveProgress extends React.PureComponent {
  render() {
    return (
      <Container>
        <CircleProgress total={0.194} today={0.024} />
        <CircleProgress total={0.008} today={0} />
        <CircleProgress total={0.682} today={0.036} />
        <CircleProgress total={0.636} today={0.03} />
        <CircleProgress total={0.464} today={0.036} />
        <CircleProgress total={0.545} today={0.01} />
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #216fcc;
  flex-wrap: wrap;
`

export default DriveProgress

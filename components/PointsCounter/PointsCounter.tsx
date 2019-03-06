import * as React from 'react'
import { PureComponent } from 'react'
import { Container, Big, Share } from './style'

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const emojiList = ['🥑', '🏆', '🎉', '✨', '💥', '⭐', '🎇', '🥇', '🍭']
const randomEmoji = emojiList[getRandomInt(0, emojiList.length - 1)]

class PointsCounter extends PureComponent {
  render() {
    return (
      <Container>
        <Big>810{randomEmoji}</Big>
        <span>из 1000</span>

        <Share>
          <img src="/static/i-twitter.svg" alt="Твитнуть" />
        </Share>
      </Container>
    )
  }
}

export default PointsCounter

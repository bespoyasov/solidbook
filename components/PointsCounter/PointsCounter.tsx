import * as React from 'react'
import { PureComponent } from 'react'
import { Container, Big, Share } from './style'
import NoSSR from 'react-no-ssr'

class PointsCounter extends PureComponent {
  emojiList = ['🥑', '🏆', '🎉', '✨', '💥', '⭐', '🍭']
  get randomEmoji(): string {
    return this.emojiList[Math.floor(Math.random() * (this.emojiList.length - 1 + 1))]
  }

  render() {
    return (
      <Container>
        <Big>
          810<NoSSR>{this.randomEmoji}</NoSSR>
        </Big>

        <span>из 1000</span>

        <Share>
          <img src="/static/i-twitter.svg" alt="Твитнуть" />
        </Share>
      </Container>
    )
  }
}

export default PointsCounter

import * as React from 'react'
import { PureComponent } from 'react'
import { Container, Big, Share, Emoji } from './style'
import NoSSR from 'react-no-ssr'

class PointsCounter extends PureComponent {
  emojiList = ['🥑', '🏆', '🎉', '✨', '💥', '⭐', '🍭']
  get randomEmoji(): string {
    return this.emojiList[Math.floor(Math.random() * this.emojiList.length)]
  }

  render() {
    return (
      <Container>
        <Big>
          810
          <Emoji>
            <NoSSR>{this.randomEmoji}</NoSSR>
          </Emoji>
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

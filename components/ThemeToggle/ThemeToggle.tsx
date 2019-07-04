import * as React from 'react'
import VisuallyHidden from '~/components/VisuallyHidden'
import { Container, Toggle, Shaft, Trolley } from './style'

export default class ThemeToggle extends React.PureComponent {
  render() {
    return (
      <Container>
        <VisuallyHidden>
          <input id="toggle" type="checkbox" />
        </VisuallyHidden>
        <Toggle aria-label="Переключить тему" role="button" htmlFor="toggle">
          <Shaft>
            <Trolley />
          </Shaft>
        </Toggle>
      </Container>
    )
  }
}

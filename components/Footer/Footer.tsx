import React, { PureComponent } from 'react'
import { Center } from '../layouts/Center'
import { Wrapper, Container, BasicExternalLink, GithubLink, PatreonLink } from './style'

export class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Center>
          <Container>
            <span>
              <BasicExternalLink href="https://bespoyasov.ru">Саша Беспоясов</BasicExternalLink> и{' '}
              <BasicExternalLink href="https://github.com/dex157">Артём Самофалов</BasicExternalLink>
            </span>

            <span>
              <GithubLink href="https://github.com/open-tech-authors">Github</GithubLink>
              <PatreonLink href="https://www.patreon.com/open_tech_authors">Patreon</PatreonLink>
            </span>
          </Container>
        </Center>
      </Wrapper>
    )
  }
}

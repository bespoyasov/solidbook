import React, { PureComponent } from 'react'

import { Wrapper, Container, BasicExternalLink, GithubLink, PatreonLink, BookLink } from './style'
import { Center } from '~/layouts/Center'

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
              <BookLink href="/solid-book.pdf">Скачать в PDF</BookLink>
              <GithubLink href="https://github.com/open-tech-authors">Github</GithubLink>
              <PatreonLink href="https://www.patreon.com/open_tech_authors">Patreon</PatreonLink>
            </span>
          </Container>
        </Center>
      </Wrapper>
    )
  }
}

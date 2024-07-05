import React, { PureComponent } from 'react'

import { Wrapper, Container, BasicExternalLink, GithubLink, BookLink } from './style'
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
              <BookLink href="https://github.com/bespoyasov/solidbook/blob/master/book.pdf">Скачать в PDF</BookLink>
              <GithubLink href="https://github.com/bespoyasov/solidbook">Лайкнуть на Github</GithubLink>
            </span>
          </Container>
        </Center>
      </Wrapper>
    )
  }
}

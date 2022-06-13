import styled from 'styled-components'

export const Wrapper = styled.footer`
  border-top: 1px solid ${(props) => props.theme.decorationColorSecondary};
  padding: 1rem 0 1.1rem;

  @media (max-width: ${(props) => props.theme.breakpoint}) {
    padding: 0.5rem 0 0.8rem;
    font-size: ${(props) => props.theme.fontSizeTiny};
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoint}) {
    display: block;

    span {
      display: block;
    }
  }
`

const externalLinkAttrs = {
  target: '_blank',
  rel: 'noopener'
}

export const BasicLink = styled.a``

export const BasicExternalLink = styled(BasicLink).attrs(externalLinkAttrs)``

const DecoratedLink = styled(BasicLink)`
  position: relative;
  padding-left: 1.6em;
  display: inline-block;

  &:before {
    position: absolute;
    top: 0.1em;
    left: 0;
  }
`

const DecoratedExternalLink = styled(DecoratedLink).attrs(externalLinkAttrs)``

export const GithubLink = styled(DecoratedExternalLink)`
  margin-left: 1em;

  &::before {
    content: '😻';
  }
`

export const PatreonLink = styled(DecoratedExternalLink)`
  margin-left: 1em;

  &::before {
    content: '💖';
  }
`

export const BookLink = styled(DecoratedExternalLink)`
  &::before {
    content: '📖';
  }
`

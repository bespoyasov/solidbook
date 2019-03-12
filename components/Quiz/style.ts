import styled from 'styled-components'

export const Container = styled.fieldset`
  padding: 0;
  margin: 0;
  border: 0;
`

export const Heading = styled.legend`
  padding: 0;
  margin: 0 0 1rem;
  font-weight: 700;
`

export const Description = styled.div`
  font-style: italic;
  color: ${props => props.theme.grey};
  line-height: 1.4;
  padding-top: 0.5em;
`

export const Item = styled.div`
  margin: 0 0 1.2rem 0;
`

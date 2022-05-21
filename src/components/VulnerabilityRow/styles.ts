import styled from 'styled-components'

export const Wrapper = styled.tr`
  width: 100%;
  font-size: 1.25rem;

  td {
    padding-left: 1rem;
    &:not(:last-child) {
      padding-right: 0.75rem;
    }
  }
`

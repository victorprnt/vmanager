import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;

  background-color: #fff;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .graph-text {
    color: #000;
    font-weight: 400;
    margin-bottom: 0.625rem;
    letter-spacing: 0.1rem;
  }

  .graph-title {
    font-size: 2rem;
  }

  .graph-subtitle {
    font-size: 1.5rem;
  }
`

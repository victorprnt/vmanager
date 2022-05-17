import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1rem 2rem;

  background-color: #fff;
  border-radius: 6px;

  img {
    color: #000;
  }

  .infocard-text {
    color: #000;
    text-align: right;

    .infocard-value {
      font-size: 3rem;
    }
    .infocard-label {
      font-size: 1rem;
    }
  }
`

import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    input {
      font-size: 1.5rem;
      color: #000;
      width: 25rem;
      height: 3rem;
      margin-bottom: 1.5rem;

      &::placeholder {
        color: gray;
      }
    }

    button {
      padding: 0.5rem;
      color: #000;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 120%;
      font-family: Roboto;
      background-color: snow;
      border-radius: 3px;

      transition: all 0.3s ease-in-out;

      &:hover {
        color: snow;
        background-color: #00b4d8;
      }
    }
  }
`

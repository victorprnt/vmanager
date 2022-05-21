import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;

  .table-container {
    width: 100%;
    height: 100%;
    margin: 3vw 3vw 3vw 6vw;
    overflow-y: auto;

    padding: 2rem;
    background-color: #fff;
    color: #000;

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
      padding: 0.5rem 1.25rem;
      color: #000;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 120%;
      font-family: Roboto;
      background-color: snow;
      border: 1px solid #000;

      transition: all 0.3s ease-in-out;

      &:hover {
        color: snow;
        background-color: #000;
      }
    }

    table {
      width: 100%;
      border-spacing: 0.5rem;

      th {
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
      }

      tr {
        &:nth-child(odd) {
          background-color: #f2f2f2;
        }
      }

      tr {
        &:hover {
          background-color: #ddd;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;

      margin-top: 1rem;

      font-size: 1.25rem;
    }
  }
`

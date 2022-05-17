import styled from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  max-width: 4%;
  background-color: #202020;

  transition: all 0.3s ease-in-out;

  &:hover {
    max-width: 10%;

    .page-link-container {
      justify-content: flex-start;

      .page-link {
        .page-link-text {
          display: flex;
        }
      }
    }
  }

  .logo-container {
    max-width: 60px;
    width: 100%;
    margin-bottom: 1.5rem;

    img {
      width: 100%;
      padding: 1rem;
      color: #fff;
    }
  }

  .page-link-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 3rem;

    /* padding: 1rem; */

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #303030;
    }

    .page-link {
      display: flex;
      /* flex-direction: column; */
      font-size: 1.5rem;

      img {
        width: 28px;
      }

      .page-link-text {
        display: none;
        margin-left: 0.75rem;

        transition: all 0.3s ease-in-out;
      }
    }
  }
`

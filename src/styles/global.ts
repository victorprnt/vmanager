import { createGlobalStyle } from 'styled-components'

import theme from './light'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  @media (max-width: ${theme.screenSize.laptop}) {
    html {
      font-size: 58%;
    }
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    html {
      font-size: 40%;
    }
  }

  html, body {
    height: 100%;
  }

  body {
    background-color: ${theme.colors.background};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
    color: #fff;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles

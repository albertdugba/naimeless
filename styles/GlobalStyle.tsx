import { createGlobalStyle, css } from 'styled-components'

import { resetCSS } from './CSSReset'
import { breakpoints } from './breakpoints'

export const GlobalStyle = createGlobalStyle(
  ({ theme: { color } }) => css`
    ${resetCSS}
    // smooth light-dark mode transition
    * {
      transition: all 250ms ease-in;
      transition-property: background, color, border;
    }

    @font-face {
      font-family: 'Cera Pro Medium';
      src: local('Cera Pro Medium'), local('Cera Pro Medium'),
        url('../public/font/CeraProMedium.otf') format('truetype');
      font-weight: 200;
      font-style: normal;
    }

    @font-face {
      font-family: 'Cera Pro Regular';
      src: local('Cera Pro Regular'), local('Cera Pro Regular'),
        url('../public/font/CeraProRegular.otf') format('truetype');
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: 'Cera Pro Medium';
      src: local('Cera Pro Medium'), local('Cera Pro Medium'),
        url('../public/font/CeraProMedium.otf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Cera Pro Black';
      src: local('Cera Pro Black'), local('Cera Pro Black'),
        url('../public/font/CeraProBlack.otf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Cera Pro Light';
      src: local('Cera Pro Light'), local('Cera Pro Light'),
        url('../public/font/CeraProLight.otf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Cera Pro Medium';
      src: local('Cera Pro Medium'), local('Cera Pro Medium'),
        url('../public/font/CeraProMedium.otf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }

    body {
      margin: 0;
      background: #f9f9f9;
      font-family: 'Cera Pro Medium', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    * {
      box-sizing: border-box;
      color: #2c2c2c;
    }

    a {
      text-decoration: none;
      color: #222;
    }

    .bolder {
      font-weight: 900;
    }

    .container {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0 1.5rem;

      @media ${breakpoints.S} {
        padding: 0 4rem;
      }
    }

    .container-desktop {
      @media ${breakpoints.L} {
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }
    }

    .copyright {
      color: white;
      text-align: end;
    }

    .footer-bottom {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-top: 1rem;
    }

    .footer-bottom div {
      padding-left: 1rem;
    }

    @media only screen and (max-width: 640px) {
      html {
        font-size: 14px;
      }
    }
  `
)

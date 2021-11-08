import { css, Global } from '@emotion/react';

const rythm = 1.6666666666666667;

export const globalStyles = (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      body {
        background-color: #efefef;
        background-image: url(/images/header-bg.jpg);
        background-repeat: no-repeat;
        background-size: auto 207px;
        background-position: 78% -95px;
        background-attachment: fixed;
        margin: 1.0875rem;

        @media (max-width: 1050px) {
          background-position: 100% -95px;
        }
        @media (max-width: 877px) {
          background-image: none;
        }
        @media (max-width: 760px) {
          margin: 0;
        }

        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: 400;
      }

      h1,
      h2,
      h3,
      h4 {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: 200;
        color: #003082;
      }

      a {
        color: inherit;
        text-decoration: underline;
      }
      a:hover {
        color: #2eaeea;
        text-decoration: none;
      }

      /* vertical rythm */
      html {
        font-size: 100%;
        line-height: ${rythm};
      }

      p,
      table {
        margin-bottom: ${rythm}rem;
      }

      h1,
      h2 {
        padding: 0;
        text-rendering: optimizeLegibility;
      }

      h1 {
        margin: 0 0 ${rythm}rem 0;
        font-size: 2rem;
        line-height: 1.1;
      }
      h2 {
        margin: ${2 * rythm}rem 0 ${rythm}rem 0;
        font-size: ${rythm / 1.1}rem;
        line-height: 1.1;
      }
    `}
  />
);

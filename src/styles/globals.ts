import { createGlobalStyle } from 'utils/styled';
import { fontSizes, lineHeights, fonts, colors } from './variables';

// tslint:disable-next-line:no-unused-expression
const GlobalStyles = createGlobalStyle`
  /* Set up a decent box model on the root element */
  html {
    box-sizing: border-box;
  }

  /*
   * Make all elements from the DOM inherit from the parent box-sizing
   * Since '*' has a specificity of 0, it does not override the 'html value
   * making all elements inheriting from the root box-sizing value
   * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
   */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${fontSizes.hecto};
    line-height: ${lineHeights.hecto};
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    color: ${colors.neutral08};
    background-color: ${colors.neutral01};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  /* Set defaults for links */
  a {
    color: ${colors.kata02};
    text-decoration: none;

    &:hover, &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  /* Figure elements */
  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: ${fonts.monospace};
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from 'utils/styled';
import { breakpoints } from './variables';

import theme from './theme';
import fontFiles from '../assets/fonts/fonts';

// tslint:disable-next-line:no-unused-expression
const GlobalStyles = createGlobalStyle`
  /* Set up a decent box model on the root element */

  @font-face {
    font-family: 'MuseoSansRounded-300';
    src: url('${fontFiles.MuseoSansRounded300eot}'); /* IE9 Compat Modes */
    src: url('${fontFiles.MuseoSansRounded300eot}') format('embedded-opentype'), /* IE6-IE8 */
         url('${fontFiles.MuseoSansRounded300woff}') format('woff'), /* Pretty Modern Browsers */
         url('${fontFiles.MuseoSansRounded300ttf}')  format('truetype'), /* Safari, Android, iOS */
         url('${fontFiles.MuseoSansRounded300svg}') format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'MuseoSansRounded-500';
    src: url('${fontFiles.MuseoSansRounded500eot}'); /* IE9 Compat Modes */
    src: url('${fontFiles.MuseoSansRounded500eot}') format('embedded-opentype'), /* IE6-IE8 */
         url('${fontFiles.MuseoSansRounded500woff}') format('woff'), /* Pretty Modern Browsers */
         url('${fontFiles.MuseoSansRounded500ttf}')  format('truetype'), /* Safari, Android, iOS */
         url('${fontFiles.MuseoSansRounded500svg}') format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'MuseoSansRounded-700';
    src: url('${fontFiles.MuseoSansRounded700eot}'); /* IE9 Compat Modes */
    src: url('${fontFiles.MuseoSansRounded700eot}') format('embedded-opentype'), /* IE6-IE8 */
         url('${fontFiles.MuseoSansRounded700woff}') format('woff'), /* Pretty Modern Browsers */
         url('${fontFiles.MuseoSansRounded700ttf}')  format('truetype'), /* Safari, Android, iOS */
         url('${fontFiles.MuseoSansRounded700svg}') format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'MuseoSansRounded-900';
    src: url('${fontFiles.MuseoSansRounded900eot}'); /* IE9 Compat Modes */
    src: url('${fontFiles.MuseoSansRounded900eot}') format('embedded-opentype'), /* IE6-IE8 */
         url('${fontFiles.MuseoSansRounded900woff}') format('woff'), /* Pretty Modern Browsers */
         url('${fontFiles.MuseoSansRounded900ttf}')  format('truetype'), /* Safari, Android, iOS */
         url('${fontFiles.MuseoSansRounded900svg}') format('svg'); /* Legacy iOS */
  }

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
    font-size: ${theme.dimensions.fontSize.regular}px;
    line-height: ${theme.dimensions.lineHeight.regular};

    @media (min-width: ${breakpoints.lg}px) {
      font-size: ${theme.dimensions.fontSize.large}px;
    }
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: 'MuseoSansRounded-300' !important;
    color: ${theme.colors.gray.copy};
    background-color: ${theme.colors.white};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  /* Set defaults for links */
  a {
    color: ${theme.colors.brand};
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
    font-family: ${theme.fonts.monospace};
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${theme.colors.gray.calm};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${theme.colors.gray.calm};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-child(odd) {
        td {
          background-color: ${theme.colors.ui.whisper};
        }
        tr {
          background-color: ${theme.colors.ui.whisper};
        }
      }
    }
  }
`;

export default GlobalStyles;

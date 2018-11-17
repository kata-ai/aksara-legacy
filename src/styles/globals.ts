import { createGlobalStyle } from 'utils/styled';
import { breakpoints } from './variables';

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
    font-size: ${props => props.theme.dimensions.fontSize.medium}px;
    line-height: ${props => props.theme.dimensions.lineHeight.medium};

    @media (min-width: ${breakpoints.lg}px) {
      font-size: ${props => props.theme.dimensions.fontSize.regular}px;
      line-height: ${props => props.theme.dimensions.lineHeight.regular};
    }
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.gray.copy};
    background-color: ${props => props.theme.colors.white};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  /* Set defaults for links */
  a {
    color: ${props => props.theme.colors.brand};
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
    font-family: ${props => props.theme.fonts.monospace};
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${props => props.theme.colors.gray.calm};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${props => props.theme.colors.gray.calm};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-child(odd) {
        td {
          background-color: ${props => props.theme.colors.ui.whisper};
        }
        tr {
          background-color: ${props => props.theme.colors.ui.whisper};
        }
      }
    }
  }
`;

export default GlobalStyles;

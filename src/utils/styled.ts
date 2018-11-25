// tslint:disable:no-duplicate-imports

import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import theme from 'styles/theme';

export type Theme = typeof theme;

// TODO: convert themes to use these properties
export interface ThemeInterface {
  backgroundColor: string;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
  textColor: string;
  linkColor?: string;
  linkColorHover?: string;
  linkColorActive?: string;
  linkColorOutline?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorActive?: string;
  focusOutlineColor?: string;
  headingColor?: string;
  mutedHeadingColor?: string;
  mutedTextColor?: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;

/* tslint:disable:max-line-length */
export const brandColors = {
  katablue: '#006fe6',
  lightkatablue: '#7fbcff',
  softkatablue: '#d8ebff',

  kata03: '#003e80',
  softblue: '#00cce9',

  semicobalt: '#2662cf',
  cobalt: '#2053af',
  darkcobalt: '#19428c',

  cobalt01: '#5587e0',
  cobalt03: '#102a59',

  iceblue: '#f8fcff',
  icebluetwo: '#f4faff',
  icebluethree: '#d8ebff',

  black: '#000',
  grey80: '#24282d',
  grey70: '#484c4f',
  grey60: '#676b6d',
  grey50: '#949a9d',
  grey40: '#c2c7c8',
  grey30: '#e2e6e8',
  grey20: '#edf1f2',
  grey10: '#f6f7f8',
  white: '#fff',

  blue: '#2a90ff',
  green: '#00c853',
  red: '#e53935',
  yellow: '#ffc400'
};

export const colors = {
  kata03: brandColors.kata03,
  softblue: brandColors.softblue,
  brand: brandColors.katablue,
  accent: brandColors.katablue,
  accentDark: brandColors.cobalt,
  cobalt01: brandColors.cobalt01,
  cobalt03: brandColors.cobalt03,
  drawer: {
    background: brandColors.white,
    border: brandColors.grey30
  },
  black: brandColors.black,
  border: brandColors.grey30,
  ui: {
    bright: brandColors.grey20,
    light: brandColors.grey10,
    whisper: brandColors.grey10
  },
  footer: {
    background: brandColors.icebluetwo,
    border: brandColors.icebluethree
  },
  code: brandColors.grey20,
  gray: {
    dark: brandColors.grey80,
    copy: brandColors.grey70,
    calm: brandColors.grey50
  },
  ink: brandColors.black,
  white: brandColors.white,
  error: brandColors.red
};

export const fonts = {
  sansSerif:
    '"Museo Sans Rounded", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
};

export const breakpoints = {
  xs: 0,
  // Mobile
  sm: 360,
  // Tablet
  md: 768,
  // Tablet (Landscape)
  lg: 1024,
  // Desktop
  xl: 1280
};

export const widths = {
  containers: {
    sm: 312,
    md: 702,
    lg: 970,
    xl: 1170
  },
  drawer: {
    sm: 280,
    lg: 256
  }
};

export const dimensions = {
  fontSize: {
    regular: 14,
    large: 16
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25
  },
  lineHeight: {
    regular: '20px',
    heading: '24px'
  },
  containerPadding: 1.5
};

export const heights = {
  header: '64px'
};

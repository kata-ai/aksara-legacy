import { colors, fonts, breakpoints } from './variables';

const theme = {
  // Site colors
  colors,

  // Font stack
  fonts,

  // Media breakpoints (Important: use `min-width`!)
  breakpoints,

  // Container widths
  containerWidth: {
    md: 720,
    lg: 960,
    xl: 1140
  },

  // Dimensions
  dimensions: {
    fontSize: {
      small: 12,
      medium: 14,
      regular: 16,
      large: 18
    },
    headingSizes: {
      h1: 2.441,
      h2: 1.953,
      h3: 1.563,
      h4: 1.25
    },
    lineHeight: {
      regular: 1.45,
      heading: 1.2
    },
    containerPadding: 1.5
  },

  // Widths
  widths: {
    drawer: {
      sm: 200,
      lg: 300
    }
  },

  // Heights
  heights: {
    header: 64
  },

  // z-index
  zIndex: {
    content: 1,
    header: 90,
    overlay: 95,
    floatingButton: 100,
    drawer: 105
  }
};

export default theme;

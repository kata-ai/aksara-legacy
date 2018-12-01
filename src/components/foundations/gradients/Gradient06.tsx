import * as React from 'react';

import { colors } from 'styles/variables';

import ColorSwatchGrid from '../ColorSwatchGrid';
import ColorGradientSwatch from '../ColorGradientSwatch';

const Gradient06: React.FC = () => (
  <ColorSwatchGrid>
    <ColorGradientSwatch
      name="Clear Sky"
      colorkey="G06 - gradient06"
      gradient={`linear-gradient(to top, ${colors.kata01}, ${colors.neutral01})`}
      gradientColors={[colors.kata01, '#ffffff']}
    />
  </ColorSwatchGrid>
);

export default Gradient06;

import * as React from 'react';

import { colors } from 'styles/variables';

import ColorSwatchGrid from '../ColorSwatchGrid';
import ColorGradientSwatch from '../ColorGradientSwatch';

const Gradient09: React.FC = () => (
  <ColorSwatchGrid>
    <ColorGradientSwatch
      name="Bliss Ashes"
      colorkey="G08 - gradient08"
      gradient={`linear-gradient(262deg, ${colors.neutral02}, ${colors.neutral03})`}
      gradientColors={[colors.neutral03, colors.neutral02]}
    />
  </ColorSwatchGrid>
);

export default Gradient09;

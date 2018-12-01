import * as React from 'react';

import { colors } from 'styles/variables';

import ColorSwatchGrid from '../ColorSwatchGrid';
import ColorGradientSwatch from '../ColorGradientSwatch';

const OceanDeep: React.FC = () => (
  <ColorSwatchGrid>
    <ColorGradientSwatch
      name="Ocean Deep"
      colorkey="G02 - gradient02"
      gradient={`linear-gradient(82deg, ${colors.cobalt03}, ${colors.cobalt02} 53%, ${
        colors.kata02
      })`}
      gradientColors={[colors.cobalt03, colors.cobalt02, colors.kata02]}
    />
  </ColorSwatchGrid>
);

export default OceanDeep;

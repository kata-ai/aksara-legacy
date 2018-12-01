import * as React from 'react';

import { colors } from 'styles/variables';

import ColorSwatchGrid from '../ColorSwatchGrid';
import ColorGradientSwatch from '../ColorGradientSwatch';

const BonVoyage: React.FC = () => (
  <ColorSwatchGrid>
    <ColorGradientSwatch
      name="Bon Voyage"
      colorkey="G01 - gradient01"
      gradient={`linear-gradient(82deg, ${colors.cobalt03}, ${colors.cobalt02} 32%, ${
        colors.kata02
      } 60%, #00cce9)`}
      gradientColors={[colors.cobalt03, colors.cobalt02, colors.kata02, '#00cce9']}
    />
  </ColorSwatchGrid>
);

export default BonVoyage;

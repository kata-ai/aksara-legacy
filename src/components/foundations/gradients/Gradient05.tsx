import * as React from 'react';

import { colors } from 'styles/variables';

import ColorSwatchGrid from '../ColorSwatchGrid';
import ColorGradientSwatch from '../ColorGradientSwatch';

const Gradient05: React.FC = () => (
  <ColorSwatchGrid>
    <ColorGradientSwatch
      name="Celestial Blue"
      colorkey="G05 - gradient05"
      gradient={`linear-gradient(262deg, #00cce9, ${colors.kata02})`}
      gradientColors={[colors.kata02, '#00cce9']}
    />
  </ColorSwatchGrid>
);

export default Gradient05;

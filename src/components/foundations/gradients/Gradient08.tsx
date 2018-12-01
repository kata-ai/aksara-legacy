import * as React from 'react';

import { colors } from 'styles/variables';

import ColorSwatchGrid from '../ColorSwatchGrid';
import ColorGradientSwatch from '../ColorGradientSwatch';

const Gradient08: React.FC = () => (
  <ColorSwatchGrid>
    <ColorGradientSwatch
      name="Lighter Mint"
      colorkey="G08 - gradient08"
      gradient={`linear-gradient(262deg, ${colors.neutral01}, #78e6ff)`}
      gradientColors={['#78e6ff', '#ffffff']}
    />
  </ColorSwatchGrid>
);

export default Gradient08;

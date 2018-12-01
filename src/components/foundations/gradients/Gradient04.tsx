import * as React from 'react';

import { colors } from 'styles/variables';

import ColorSwatchGrid from '../ColorSwatchGrid';
import ColorGradientSwatch from '../ColorGradientSwatch';

const AquaMarine: React.FC = () => (
  <ColorSwatchGrid>
    <ColorGradientSwatch
      name="Aqua Marine"
      colorkey="G04 - gradient04"
      gradient={`linear-gradient(to top, ${colors.cobalt03}, ${colors.cobalt02} 51%, ${
        colors.kata02
      })`}
      gradientColors={[colors.cobalt03, colors.cobalt02, colors.kata02]}
    />
  </ColorSwatchGrid>
);

export default AquaMarine;

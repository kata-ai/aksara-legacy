import * as React from 'react';

import { colors } from 'styles/variables';

import ColorSwatchGrid from '../ColorSwatchGrid';
import ColorGradientSwatch from '../ColorGradientSwatch';

const TwilightSky: React.FC = () => (
  <ColorSwatchGrid>
    <ColorGradientSwatch
      name="Twilight Sky"
      colorkey="G03 - gradient03"
      gradient={`linear-gradient(to top, ${colors.kata03}, ${colors.kata02})`}
      gradientColors={[colors.kata03, colors.kata02]}
    />
  </ColorSwatchGrid>
);

export default TwilightSky;

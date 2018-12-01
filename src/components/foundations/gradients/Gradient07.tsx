import * as React from 'react';

import ColorSwatchGrid from '../ColorSwatchGrid';
import ColorGradientSwatch from '../ColorGradientSwatch';

const Gradient07: React.FC = () => (
  <ColorSwatchGrid>
    <ColorGradientSwatch
      name="Frosty Mint"
      colorkey="G07 - gradient07"
      gradient={`linear-gradient(82deg, #00cce9, #78e6ff)`}
      gradientColors={['#00cce9', '#78e6ff']}
    />
  </ColorSwatchGrid>
);

export default Gradient07;

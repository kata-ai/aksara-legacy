import * as React from 'react';
import styled from 'styled-components';

interface ColorSwatchGridProps {
  className?: string;
}

const ColorSwatchGrid: React.SFC<ColorSwatchGridProps> = ({ className, children }) => (
  <Root className={className}>{children}</Root>
);

export default ColorSwatchGrid;

const Root = styled('div')`
  display: flex;
  flex-direction: row;
  margin: 0 -15px;
  width: 100%;
  max-width: 480px;
`;

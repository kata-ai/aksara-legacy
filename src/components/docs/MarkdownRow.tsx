import React from 'react';
import { breakpoints } from 'styles/variables';
import Row from 'components/layout/Row';

interface MarkdownRowProps {
  className?: string;
  style?: React.CSSProperties;
  justify?: 'centered' | 'space-between';
  breakpoint?: keyof typeof breakpoints;
}

const MarkdownRow: React.FC<MarkdownRowProps> = ({
  className,
  style,
  justify,
  breakpoint,
  ...rest
}) => (
  <Row
    className={className}
    style={style}
    centered={justify === 'centered'}
    spaceBetween={justify === 'space-between'}
    breakAt={breakpoint}
    {...rest}
  />
);

export default MarkdownRow;

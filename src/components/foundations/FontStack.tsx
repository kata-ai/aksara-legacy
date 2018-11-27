import * as React from 'react';
import styled from 'styled-components';

interface FontStackProps {
  className?: string;
  weight: number;
}

const FontStack: React.SFC<FontStackProps> = ({ className, weight, children }) => (
  <Root className={className} weight={weight}>
    <span>{children}</span>
  </Root>
);

export default FontStack;

const Root = styled<FontStackProps, 'div'>('div')`
  margin: 32px 0;
  color: #484c4f;

  span {
    display: inline-block;
    font-size: 28px;
    line-height: 32px;
    font-weight: ${props => props.weight};
  }
`;

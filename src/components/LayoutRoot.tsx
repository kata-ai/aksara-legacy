import React from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyles from 'styles/globals';
import styled from 'utils/styled';

const StyledLayoutRoot = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 64px;

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

interface LayoutRootProps {
  className?: string;
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <StyledLayoutRoot className={className}>
    <Normalize />
    <GlobalStyles />
    {children}
  </StyledLayoutRoot>
);

export default LayoutRoot;

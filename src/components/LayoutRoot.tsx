import React from 'react';
import styled from 'utils/styled';
import GlobalStyle from 'styles/globals';

const StyledLayoutRoot = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

interface LayoutRootProps {
  className?: string;
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <StyledLayoutRoot className={className}>
    <GlobalStyle />
    {children}
  </StyledLayoutRoot>
);

export default LayoutRoot;

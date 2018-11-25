import * as React from 'react';
import styled from 'utils/styled';

interface SlideoutDrawerButtonProps {
  drawerIsOpen?: boolean;
}

const Wrapper = styled<SlideoutDrawerButtonProps, 'div'>('div')`
  display: none;
  position: fixed;
  top: 80px;
  left: ${props => (props.drawerIsOpen ? `${props.theme.widths.drawer.sm}px` : 0)};
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  z-index: ${props => props.theme.zIndex.drawer - 1};
  transition: all 0.3s ease;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    display: block;
  }
`;

const Inner = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SlideoutDrawerButton: React.SFC<SlideoutDrawerButtonProps> = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <Inner>{children}</Inner>
  </Wrapper>
);

export default SlideoutDrawerButton;

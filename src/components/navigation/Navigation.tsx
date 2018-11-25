import React from 'react';

import styled from 'utils/styled';
import { MenuNode, GatsbyNode } from 'interfaces/nodes';
import DocumentationNavMenus from './DocumentationNavMenus';

interface ToggleableProps {
  isOpen?: boolean;
}

const Wrapper = styled<ToggleableProps, 'nav'>('nav')`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  background-color: ${props => props.theme.colors.white};
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  z-index: ${props => props.theme.zIndex.drawer};

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: ${props => props.theme.widths.drawer.sm}px;
    height: 100vh;
    padding-bottom: 5rem;
    overflow-y: auto;
    pointer-events: auto;
    transform: translate(${props => (props.isOpen ? '0' : '-100%')}, 0);
    transition: transform 0.3s ease;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex: 0 0 ${props => props.theme.widths.drawer.lg}px;
    box-shadow: none;
    border-bottom: none;
    border-right: 1px solid ${props => props.theme.colors.drawer.border};
  }
`;

const WrapperInner = styled('div')`
  padding: 16px 0;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    position: fixed;
    width: ${props => props.theme.widths.drawer.lg - 1}px;
    flex: 1 1 auto;
    z-index: 2;
    height: 100vh;
    overflow-y: auto;
  }
`;

const DocumentationNav = styled('nav')`
  display: flex;
  flex-direction: column;
`;

interface HeaderProps {
  title: string;
  navigation?: GatsbyNode<MenuNode>[];
  open?: boolean;
  onOpenNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  onCloseNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  toggleDrawer?: () => void;
}

class Navigation extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    const { navigation, open, onCloseNavMenu } = this.props;

    return (
      <Wrapper isOpen={open}>
        <WrapperInner>
          <DocumentationNav>
            <DocumentationNavMenus navigation={navigation} onCloseNavMenu={onCloseNavMenu} />
          </DocumentationNav>
        </WrapperInner>
      </Wrapper>
    );
  }
}

export default Navigation;

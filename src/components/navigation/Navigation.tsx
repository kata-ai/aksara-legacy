import React from 'react';
import { WindowLocation } from '@reach/router';

import styled from 'utils/styled';
import { MediaMatchers } from 'utils/mediaQueries';
import { MenuNode, GatsbyNode } from 'interfaces/nodes';
import { colors, breakpoints } from 'styles/variables';

import DocumentationNavMenus from './DocumentationNavMenus';
import DesktopDocumentationMenus from './DesktopDocumentationMenus';

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

  @media (max-width: ${breakpoints.lg - 1}px) {
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

  @media (min-width: ${breakpoints.lg}px) {
    flex: 0 0 ${props => props.theme.widths.drawer.lg}px;
    flex-direction: row;
    box-shadow: none;
    border-bottom: none;
    border-right: 1px solid ${props => props.theme.colors.drawer.border};
  }
`;

const WrapperInner = styled('div')`
  padding: 16px;

  @media (min-width: ${breakpoints.lg}px) {
    position: fixed;
    margin-left: 64px;
    width: calc(${props => props.theme.widths.drawer.lg - 1}px - 64px);
    flex: 1 1 auto;
    z-index: 2;
    height: calc(100vh - ${props => props.theme.heights.header}px);
    overflow-y: auto;
  }
`;

const DesktopSidenav = styled('div')`
  flex: 0 0 64px;
  padding: 24px 8px;
  color: ${colors.neutral06};
  background-color: ${colors.neutral09};
  z-index: 10;
`;

interface HeaderProps {
  title: string;
  navigation?: GatsbyNode<MenuNode>[];
  open?: boolean;
  location?: WindowLocation;
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
        <MediaMatchers.ServerRender predicted="mobile" hydrated>
          <MediaMatchers.Above tabletPortrait>
            <DesktopSidenav>a</DesktopSidenav>
          </MediaMatchers.Above>
        </MediaMatchers.ServerRender>
        <WrapperInner>
          <MediaMatchers.ServerRender predicted="mobile" hydrated>
            <MediaMatchers.Below tabletLandscape>
              <DocumentationNavMenus navigation={navigation} onCloseNavMenu={onCloseNavMenu} />
            </MediaMatchers.Below>
            <MediaMatchers.Above tabletPortrait>
              <DesktopDocumentationMenus navigation={navigation} onCloseNavMenu={onCloseNavMenu} />
            </MediaMatchers.Above>
          </MediaMatchers.ServerRender>
        </WrapperInner>
      </Wrapper>
    );
  }
}

export default Navigation;

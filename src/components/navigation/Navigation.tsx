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
    padding: 24px 16px;
    width: calc(${props => props.theme.widths.drawer.lg - 1}px - 64px);
    flex: 1 1 auto;
    z-index: 2;
    height: calc(100vh - ${props => props.theme.heights.header}px);
    overflow-y: auto;
  }
`;

const DesktopSidenav = styled('div')`
  position: fixed;
  flex: 0 0 64px;
  padding: 24px 8px;
  color: ${colors.neutral06};
  background-color: ${colors.neutral09};
  z-index: 10;
`;

const DesktopSidenavMenu = styled<{ active?: boolean }, 'button'>('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 48px;
  height: 48px;
  background: none;
  background-color: ${props => (props.active ? colors.kata02 : 'transparent')};
  color: ${props => (props.active ? colors.neutral01 : colors.neutral06)};
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  svg {
    g {
      fill: ${props => (props.active ? colors.neutral01 : colors.neutral06)};
    }
  }

  &:hover,
  &:focus {
    color: ${colors.neutral01};

    svg {
      g {
        fill: ${colors.neutral01};
      }
    }
  }

  &:focus {
    background-color: ${props => (props.active ? colors.kata02 : colors.neutral08)};
  }
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

interface HeaderState {
  activeKey?: string;
}

class Navigation extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    const getBasePath = this.props.location
      ? /^\/([^\/]*).+\/$/.exec(this.props.location.pathname)
      : undefined;

    this.state = {
      activeKey: getBasePath ? getBasePath[1] : undefined
    };
  }

  setActiveKey = (key: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    this.setState({
      activeKey: key
    });
  };

  render() {
    const { navigation, open, onCloseNavMenu } = this.props;
    const { activeKey } = this.state;

    // TODO: omg someone please refactor this.
    return (
      <Wrapper isOpen={open}>
        <MediaMatchers.ServerRender predicted="mobile" hydrated>
          <MediaMatchers.Above tabletPortrait>
            <DesktopSidenav>
              <DesktopSidenavMenu
                active={activeKey === 'principles'}
                onClick={this.setActiveKey('principles')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <title>Principles</title>
                  <defs>
                    <path
                      id="principle-icon"
                      d="M13.276 1.232a.739.739 0 0 0-.537-.205H8.767V0H7.233v1.027H4.489c-1.055 0-1.918.77-1.918 1.711v2.396c0 .94.863 1.71 1.918 1.71h2.744v.685H3.26a.739.739 0 0 0-.537.206L.23 9.976a.632.632 0 0 0 0 .976l2.494 2.207a.739.739 0 0 0 .537.206h3.972V16h1.534v-2.652h2.744c1.055 0 1.918-.77 1.918-1.712V9.241c0-.942-.863-1.712-1.918-1.712H8.767v-.684h3.972a.739.739 0 0 0 .537-.205l2.494-2.242a.632.632 0 0 0 0-.976l-2.494-2.19zm-1.382 8.009v2.395c0 .189-.172.343-.383.343H3.588L1.86 10.456l1.727-1.558h7.923c.21 0 .383.154.383.343zm.518-3.765H4.49c-.21 0-.383-.154-.383-.342V2.738c0-.188.172-.342.383-.342h7.923l1.727 1.523-1.727 1.557z"
                    />
                  </defs>
                  <g fill="none" fill-rule="evenodd" transform="translate(4 4)">
                    <mask id="principle-mask" fill="#fff">
                      <use xlinkHref="#principle-icon" />
                    </mask>
                    <use fill="none" fill-rule="nonzero" xlinkHref="#principle-icon" />
                    <g fill="none" mask="url(#principle-mask)">
                      <path d="M-4-4h24v24H-4z" />
                    </g>
                  </g>
                </svg>
              </DesktopSidenavMenu>
              <DesktopSidenavMenu
                active={activeKey === 'design'}
                onClick={this.setActiveKey('design')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <title>Design</title>
                  <defs>
                    <path
                      id="design-icon"
                      d="M10.62.002a.533.533 0 0 0-.411.25L8.18 3.557H.533a.533.533 0 0 0-.055 0A.533.533 0 0 0 0 4.09v7.822c0 .294.239.533.533.533h3.683A5.342 5.342 0 0 0 9.242 16a5.34 5.34 0 0 0 5.332-5.333c0-.622-.108-1.221-.305-1.777h1.194a.533.533 0 0 0 .456-.817l-4.8-7.821a.533.533 0 0 0-.5-.25zM10.662 2l3.461 5.5h-.71c-.954-1.297-2.394-2.005-4.094-2.053-.106-.003-.214-.007-.319 0v-.809L10.662 2zM1.5 5h6v.774c-1.932.625-3.394 2.421-3.547 4.59a4.532 4.532 0 0 0 0 .636H1.5V5zm7.75 2A3.743 3.743 0 0 1 13 10.75a3.743 3.743 0 0 1-3.75 3.75 3.743 3.743 0 0 1-3.75-3.75A3.743 3.743 0 0 1 9.25 7z"
                    />
                  </defs>
                  <g fill="none" fill-rule="evenodd" transform="translate(4 4)">
                    <mask id="design-mask" fill="#fff">
                      <use xlinkHref="#design-icon" />
                    </mask>
                    <use fill="none" fill-rule="nonzero" xlinkHref="#design-icon" />
                    <g fill="none" mask="url(#design-mask)">
                      <path d="M-4-4h24v24H-4z" />
                    </g>
                  </g>
                </svg>
              </DesktopSidenavMenu>
              <DesktopSidenavMenu
                active={activeKey === 'communication'}
                onClick={this.setActiveKey('communication')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <title>Communication</title>
                  <defs>
                    <path
                      id="communication-icon"
                      d="M7.997 8.667a.666.666 0 1 1 0-1.333.666.666 0 0 1 0 1.333zm-2.665 0a.666.666 0 1 1 0-1.333.666.666 0 0 1 0 1.333zm5.33 0a.666.666 0 1 0 0-1.333.666.666 0 0 0 0 1.333zM7.997 0a7.983 7.983 0 0 0-6.929 3.997A7.995 7.995 0 0 0 1.078 12l-1.04 3.122a.667.667 0 0 0 .842.843L4 14.923a7.99 7.99 0 0 0 9.141-.792 8.004 8.004 0 0 0 2.376-8.87A7.995 7.995 0 0 0 7.997 0zm0 14.667c-1.26-.001-2.493-.36-3.556-1.037a.666.666 0 0 0-.566-.068l-2.154.718.718-2.155a.667.667 0 0 0-.068-.567 6.67 6.67 0 0 1 .787-8.132 6.659 6.659 0 0 1 8.066-1.262 6.668 6.668 0 0 1-3.227 12.503z"
                    />
                  </defs>
                  <g fill="none" fill-rule="evenodd" transform="translate(4 4)">
                    <mask id="communication-mask" fill="#fff">
                      <use xlinkHref="#communication-icon" />
                    </mask>
                    <use fill="none" fill-rule="nonzero" xlinkHref="#communication-icon" />
                    <g fill="none" mask="url(#communication-mask)">
                      <path d="M-4-4h24v24H-4z" />
                    </g>
                  </g>
                </svg>
              </DesktopSidenavMenu>
            </DesktopSidenav>
          </MediaMatchers.Above>
        </MediaMatchers.ServerRender>
        <WrapperInner>
          <MediaMatchers.ServerRender predicted="mobile" hydrated>
            <MediaMatchers.Below tabletLandscape>
              <DocumentationNavMenus navigation={navigation} onCloseNavMenu={onCloseNavMenu} />
            </MediaMatchers.Below>
            <MediaMatchers.Above tabletPortrait>
              <DesktopDocumentationMenus
                activeMenuTag={activeKey}
                navigation={navigation}
                onCloseNavMenu={onCloseNavMenu}
              />
            </MediaMatchers.Above>
          </MediaMatchers.ServerRender>
        </WrapperInner>
      </Wrapper>
    );
  }
}

export default Navigation;

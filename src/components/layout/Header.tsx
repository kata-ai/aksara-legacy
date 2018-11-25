import React from 'react';
import { Link } from 'gatsby';

import styled from 'utils/styled';
import NavButton from '../navigation/NavButton';

import Logo from 'assets/images/aksara-logo.svg';
import { MediaMatchers } from 'utils/mediaQueries';
import HeaderDesktopMenu from './HeaderDesktopMenu';
import HeaderMobileMenu from './HeaderMobileMenu';

interface ToggleableProps {
  isOpen?: boolean;
}

const Wrapper = styled<ToggleableProps, 'header'>('header')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 ${props => props.theme.dimensions.containerPadding.mobile};
  transition: all 0.3s ease;
  background-color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  top: 0;
  width: 100%;
  z-index: ${props => props.theme.zIndex.overlay - 5};
  height: ${props => props.theme.heights.header}px;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex: 0 0 ${props => props.theme.widths.drawer.lg}px;
    z-index: ${props => props.theme.zIndex.topbar};
  }
`;

const LogoWrapper = styled('div')`
  color: ${props => props.theme.colors.gray.copy};

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    padding-top: 0;
  }
`;

const LogoLink = styled(Link)`
  display: inline-block;
  cursor: pointer;

  img {
    vertical-align: middle;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

interface HeaderProps {
  open?: boolean;
  disableNav?: boolean;
  onOpenNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  onCloseNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  toggleDrawer?: () => void;
}

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    const { toggleDrawer, open, disableNav, onCloseNavMenu } = this.props;

    return (
      <Wrapper isOpen={open}>
        <LogoWrapper>
          <LogoLink to="/" onClick={onCloseNavMenu}>
            <img src={Logo} />
          </LogoLink>
        </LogoWrapper>
        {/* TODO: move this to navigation */}
        {!disableNav && <NavButton onClick={toggleDrawer} drawerIsOpen={open} />}
        {/* TODO: conditionally render mobile menu w/ `react-media-match` */}
        <MediaMatchers.ServerRender predicted="desktop" hydrated>
          <MediaMatchers.Matcher
            mobile={<HeaderMobileMenu />}
            tablet={<HeaderDesktopMenu />}
            desktop={<HeaderDesktopMenu />}
          />
        </MediaMatchers.ServerRender>
      </Wrapper>
    );
  }
}

export default Header;

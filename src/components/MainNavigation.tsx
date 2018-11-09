import React from 'react';
import Link from 'gatsby-link';

import styled from 'utils/styled';
import { MenuNode } from 'interfaces/nodes';
import MobileHeader from './MobileHeader';
import NavButton from './NavButton';

import Logo from 'assets/images/aksara-logo.svg';

interface ToggleableProps {
  isOpen?: boolean;
}

const Wrapper = styled<ToggleableProps, 'header'>('header')`
  display: block;
  position: fixed;
  transition: all 0.3s ease;
  background-color: ${props => props.theme.colors.drawer.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  top: 0;
  width: 100%;
  z-index: 99999;
  height: ${props => props.theme.heights.header}px;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex: 0 0 ${props => props.theme.widths.drawer.lg}px;
    box-shadow: none;
    border-bottom: none;
    border-right: 1px solid ${props => props.theme.colors.drawer.border};
  }
`;

const WrapperInner = styled('div')`
  display: flex;
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    margin-top: ${props => props.theme.heights.header}px;
  }
`;

const MenuWrapper = styled('div')`
  padding: 1rem ${props => props.theme.dimensions.containerPadding}rem;
  width: 70%;
`;

const MenuList = styled('ul')`
  padding: 0px;
  margin: 0px;
  text-align: right;
  & > li {
    padding: 8px 21px;
    display: inline-block;
  }
`;

const Menu = styled(Link)`
  cursor: pointer;
  font-family: MuseoSansRounded-700;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.3px;
  color: ${props => props.theme.colors.gray.copy};
  &:hover, &:focus {
    text-decoration: none;
  }
`;

const LogoWrapper = styled('div')`
  padding: 1rem ${props => props.theme.dimensions.containerPadding}rem;
  width: 30%;
  color: ${props => props.theme.colors.gray.copy};

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    padding-top: 0;
  }
`;

const LogoLink = styled(Link)`
  cursor: pointer;
  &:hover, &:focus {
    text-decoration: none;
  }
`;

interface HeaderProps {
  title: string;
  navigation?: Array<{ node: MenuNode }>;
  open?: boolean;
  onOpenNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  onCloseNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  toggleDrawer?: () => void;
}

class MainNavigation extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    const { title, toggleDrawer, navigation, open, onCloseNavMenu } = this.props;

    return (
      <Wrapper isOpen={open}>
        <MobileHeader absolute transparent>
          <NavButton onClick={toggleDrawer} drawerIsOpen={open} />
        </MobileHeader>
        <WrapperInner>
          <LogoWrapper>
            <LogoLink to="/" onClick={onCloseNavMenu}>
              <img src={Logo} />
            </LogoLink>
          </LogoWrapper>
          <MenuWrapper>
            <MenuList>
              <li><Menu to="/kata">Go to kata.ai</Menu></li>
              <li><Menu to="/wicara">Wicara</Menu></li>
              <li><Menu to="/version-updates">What’s New</Menu></li>
            </MenuList>
          </MenuWrapper>
        </WrapperInner>
      </Wrapper>
    );
  }
}

export default MainNavigation;

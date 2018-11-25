import React from 'react';
import { Link } from 'gatsby';
import styled from 'utils/styled';
import { colors, elevationShadow } from 'styles/variables';

const MenuWrapper = styled('div')`
  position: relative;
`;

const MenuInner = styled<HeaderMobileMenuState, 'div'>('div')`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  right: 0;
  margin-top: 4px;
  padding: 8px 0;
  border-radius: 6px;
  background-color: ${colors.neutral01};
  box-shadow: ${elevationShadow.elevationZ200};
  min-width: 200px;
`;

const MenuButton = styled('button')`
  background: none;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;

  svg {
    g {
      fill: ${colors.neutral08};
    }
  }

  &:hover,
  &:focus {
    background-color: ${colors.neutral08};

    svg {
      g {
        fill: ${colors.neutral01};
      }
    }
  }
`;

const MenuList = styled('ul')`
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;

  & > li {
    padding: 0;
  }
`;

const Menu = styled(Link)`
  display: block;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.3px;
  padding: 12px 8px;
  color: ${colors.neutral08};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${colors.neutral02};
    text-decoration: none;
  }
`;

const MenuLink = styled('a')`
  display: block;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.3px;
  padding: 12px 8px;
  color: ${props => props.theme.colors.gray.copy};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${colors.neutral02};
    text-decoration: none;
  }
`;

interface HeaderMobileMenuState {
  isOpen?: boolean;
}

class HeaderMobileMenu extends React.Component<{}, HeaderMobileMenuState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <MenuWrapper>
        <MenuButton onClick={this.toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
              <rect width="24" height="3" rx="1.5" />
              <rect width="24" height="3" y="10.5" rx="1.5" />
              <rect width="24" height="3" y="21" rx="1.5" />
            </g>
          </svg>
        </MenuButton>
        <MenuInner isOpen={isOpen}>
          <MenuList>
            <li>
              <MenuLink href="https://kata.ai/" target="_blank" rel="noopener noreferrer">
                Go to kata.ai
              </MenuLink>
            </li>
            <li>
              <MenuLink
                href="https://wicara-storybook.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wicara
              </MenuLink>
            </li>
            <li>
              <Menu to="/version-updates">What’s New</Menu>
            </li>
          </MenuList>
        </MenuInner>
      </MenuWrapper>
    );
  }
}

export default HeaderMobileMenu;

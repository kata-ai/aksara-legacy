import React from 'react';
import { Link } from 'gatsby';
import styled from 'utils/styled';
import { colors } from 'styles/variables';

const MenuWrapper = styled('div')`
  text-align: right;
`;

const MenuList = styled('ul')`
  padding: 0px;
  margin: 0px;
  & > li {
    padding: 8px 21px;
    display: inline-block;
  }
`;

const Menu = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.3px;
  color: ${props => props.theme.colors.gray.copy};

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const MenuLink = styled('a')`
  display: flex;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.3px;
  color: ${props => props.theme.colors.gray.copy};

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const BetaBadge = styled('img')`
  margin-left: 8px;
  max-height: 14px;
`;

const NewBadge = styled('div')`
  display: inline-block;
  background-color: ${colors.green01};
  width: 4px;
  height: 4px;
  border-radius: 4px;
  margin-left: 4px;
`;

const HeaderDesktopMenu: React.FC = () => (
  <MenuWrapper>
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
          Wicara <BetaBadge src={require('assets/images/beta-tag.png')} />
        </MenuLink>
      </li>
      <li>
        <Menu to="/version-updates">
          What’s New <NewBadge />
        </Menu>
      </li>
    </MenuList>
  </MenuWrapper>
);

export default HeaderDesktopMenu;

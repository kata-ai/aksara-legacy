import { Link } from 'gatsby';
import styled from 'utils/styled';
import { colors } from 'styles/variables';

export interface ToggleableProps {
  isOpen?: boolean;
}

export const ToggleMenu = styled<ToggleableProps, 'ul'>('ul')`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  max-height: ${props => !props.isOpen && 0};
  list-style-type: none;
  margin: 8px 0;
  padding: 0;
  transition: all 0.3s ease;
`;

export const ToggleMenuList = styled('li')`
  margin: 0;
  font-size: 85%;
  color: ${colors.neutral06};
`;

export const ToggleMenuListCategory = styled('span')`
  display: block;
  padding: 12px 0 8px;
  color: ${colors.neutral06};
  font-weight: 700;
  text-transform: uppercase;
`;

export const ToggleMenuListLink = styled(Link)`
  display: block;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 300;
  color: ${colors.neutral08};

  &:hover,
  &:focus {
    text-decoration: none;
    background-color: ${colors.neutral02};
  }

  &:focus {
    border-color: ${colors.kata02};
  }

  &.active {
    color: ${colors.kata02};
  }
`;

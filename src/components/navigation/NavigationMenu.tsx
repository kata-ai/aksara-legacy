import React from 'react';
import { MenuNode } from 'interfaces/nodes';
import styled from 'utils/styled';
import { colors, fontSizes, lineHeights } from 'styles/variables';
import {
  ToggleableProps,
  ToggleMenu,
  ToggleMenuList,
  ToggleMenuListCategory,
  ToggleMenuListLink
} from './ToggleMenu';

interface NavigationMenuProps {
  node: MenuNode;
  menuKey: string;
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<any>) => void;
  onCloseNavMenu?: (e: React.MouseEvent<any>) => void;
}

const Root = styled('div')`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ToggleButton = styled<ToggleableProps, 'button'>('button')`
  display: block;
  width: 100%;
  margin: 0;
  padding: 8px 0;
  border: none;
  background: none;
  outline: none;
  font-size: ${fontSizes.giga};
  line-height: ${lineHeights.giga};
  text-align: left;
  color: ${colors.neutral08};
  background-color: ${props => props.theme.colors.white};
  transition: all 0.3s ease;
  cursor: pointer;
`;

const ToggleButtonInner = styled<ToggleableProps, 'div'>('div')`
  display: flex;
  flex-direction: row;
  align-items: center;

  & svg {
    g {
      fill: #949a9d;
    }
  }
`;

const ToggleButtonSpan = styled('span')`
  flex: 1 1 auto;
  font-weight: 500;
`;

class NavigationMenu extends React.PureComponent<NavigationMenuProps, ToggleableProps> {
  render() {
    const { node, onCloseNavMenu, onClick, isOpen } = this.props;

    return (
      <Root>
        <ToggleButton onClick={onClick} isOpen={isOpen}>
          <ToggleButtonInner isOpen={isOpen}>
            <ToggleButtonSpan>{node.title}</ToggleButtonSpan>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10px"
                height="6px"
                viewBox="0 0 10 6"
                version="1.1"
              >
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  {/* tslint:disable:max-line-length */}
                  <path
                    d="M5.00025,6.00025 C4.74425,6.00025 4.48825,5.90225 4.29325,5.70725 L0.29325,1.70725 C-0.09775,1.31625 -0.09775,0.68425 0.29325,0.29325 C0.68425,-0.09775 1.31625,-0.09775 1.70725,0.29325 L5.00025,3.58625 L8.29325,0.29325 C8.68425,-0.09775 9.31625,-0.09775 9.70725,0.29325 C10.09825,0.68425 10.09825,1.31625 9.70725,1.70725 L5.70725,5.70725 C5.51225,5.90225 5.25625,6.00025 5.00025,6.00025"
                    transform="translate(5.000250, 3.000125) scale(1, -1) translate(-5.000250, -3.000125) "
                  />
                  {/* tslint:enable:max-line-length */}
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="6px" viewBox="0 0 10 6">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  {/* tslint:disable:max-line-length */}
                  <path d="M5.00025,6.00025 C4.74425,6.00025 4.48825,5.90225 4.29325,5.70725 L0.29325,1.70725 C-0.09775,1.31625 -0.09775,0.68425 0.29325,0.29325 C0.68425,-0.09775 1.31625,-0.09775 1.70725,0.29325 L5.00025,3.58625 L8.29325,0.29325 C8.68425,-0.09775 9.31625,-0.09775 9.70725,0.29325 C10.09825,0.68425 10.09825,1.31625 9.70725,1.70725 L5.70725,5.70725 C5.51225,5.90225 5.25625,6.00025 5.00025,6.00025" />
                  {/* tslint:enable:max-line-length */}
                </g>
              </svg>
            )}
          </ToggleButtonInner>
        </ToggleButton>
        <ToggleMenu isOpen={isOpen}>
          {node.items.map(item => {
            if (item.type === 'category') {
              return (
                <ToggleMenuList key={item.title}>
                  <ToggleMenuListCategory>{item.title}</ToggleMenuListCategory>
                </ToggleMenuList>
              );
            }

            return (
              <ToggleMenuList key={item.id}>
                <ToggleMenuListLink
                  to={item.slug}
                  activeClassName="active"
                  onClick={onCloseNavMenu}
                >
                  {item.title}
                </ToggleMenuListLink>
              </ToggleMenuList>
            );
          })}
        </ToggleMenu>
      </Root>
    );
  }
}

export default NavigationMenu;

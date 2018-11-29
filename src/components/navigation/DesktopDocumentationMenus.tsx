import React, { Fragment } from 'react';
import { GatsbyNode, MenuNode } from 'interfaces/nodes';
import styled from 'utils/styled';
import {
  ToggleMenuList,
  ToggleMenuListCategory,
  ToggleMenuListLink,
  ToggleMenu
} from './ToggleMenu';
import { fontSizes, lineHeights } from 'styles/variables';

interface Props {
  navigation?: GatsbyNode<MenuNode>[];
  activeMenuTag?: string;
  onCloseNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface State {
  activeMenuKey?: string;
}

class DesktopDocumentationMenus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeMenuKey: undefined
    };
  }

  onNavMenuClick(activeMenuKey: string) {
    this.setState(prevState => {
      if (prevState.activeMenuKey === activeMenuKey) {
        return {
          activeMenuKey: undefined
        };
      }

      return { activeMenuKey };
    });
  }

  render() {
    const { navigation, activeMenuTag, onCloseNavMenu } = this.props;

    const currentMenu =
      navigation && activeMenuTag
        ? navigation.filter(({ node }) => node.tag === activeMenuTag)
        : undefined;

    if (!currentMenu) {
      return null;
    }

    if (currentMenu.length === 0) {
      return null;
    }

    return (
      <Root>
        {currentMenu.map(({ node }) => (
          <Fragment key={node.tag}>
            <MenuHeading>{node.title}</MenuHeading>
            <ToggleMenu isOpen>
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
          </Fragment>
        ))}
      </Root>
    );
  }
}

const Root = styled('div')``;

const MenuHeading = styled('h3')`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: ${fontSizes.giga};
  line-height: ${lineHeights.giga};
  font-weight: 500;
`;

export default DesktopDocumentationMenus;

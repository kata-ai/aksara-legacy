import React from 'react';
import { GatsbyNode, MenuNode } from 'interfaces/nodes';
import NavigationMenu from './NavigationMenu';
import styled from 'utils/styled';

interface Props {
  navigation?: GatsbyNode<MenuNode>[];
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
    const { navigation, onCloseNavMenu } = this.props;

    return (
      <Root>
        {navigation &&
          navigation.map(({ node }) => (
            <NavigationMenu
              key={node.title}
              menuKey={node.title}
              node={node}
              isOpen={this.state.activeMenuKey === node.title}
              onClick={() => this.onNavMenuClick(node.title)}
              onCloseNavMenu={onCloseNavMenu}
            />
          ))}
      </Root>
    );
  }
}

const Root = styled('div')``;

export default DesktopDocumentationMenus;

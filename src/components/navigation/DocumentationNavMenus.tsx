import React, { Fragment } from 'react';
import { GatsbyNode, MenuNode } from 'interfaces/nodes';
import NavigationMenu from './NavigationMenu';

interface Props {
  navigation?: GatsbyNode<MenuNode>[];
  onCloseNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface State {
  activeMenuKey?: string;
}

class DocumentationNavMenus extends React.Component<Props, State> {
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
      <Fragment>
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
      </Fragment>
    );
  }
}

export default DocumentationNavMenus;

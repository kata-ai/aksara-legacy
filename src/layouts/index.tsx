import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { WindowLocation } from '@reach/router';

import MainNavigation from 'components/MainNavigation';
import Navigation from 'components/Navigation';
import LayoutRoot from 'components/LayoutRoot';
import LayoutMain from 'components/LayoutMain';
import theme from 'styles/theme';
import { ThemeProvider } from 'utils/styled';
import { MenuNode } from 'interfaces/nodes';
import { SiteMetadata } from 'interfaces/gatsby';

import '@kata-kit/fonts/museo-sans-rounded.css';
import '@kata-kit/fonts/kata-icons.css';
import 'prism-themes/themes/prism-atom-dark.css';

import Overlay from 'components/Overlay';

interface WrapperProps {
  location?: WindowLocation;
  isDocsLayout?: boolean;
}

interface WrapperState {
  drawerIsOpen: boolean;
}

interface DataProps {
  site: {
    siteMetadata: SiteMetadata;
  };
  navigationMenus: {
    edges: Array<{
      node: MenuNode;
    }>;
  };
}

class Layout extends React.Component<WrapperProps, WrapperState> {
  constructor(props: WrapperProps) {
    super(props);

    this.state = {
      drawerIsOpen: false
    };
  }

  render() {
    const { children, location, isDocsLayout } = this.props;
    const { drawerIsOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <StaticQuery query={query}>
          {(data: DataProps) => {
            const { siteMetadata } = data.site;

            return (
              <LayoutRoot>
                <Helmet>
                  <title>{siteMetadata.title}</title>
                  <meta name="description" content={siteMetadata.description} />
                  <meta name="keywords" content={siteMetadata.keywords} />
                  <meta property="og:type" content="website" />
                  <meta property="og:site_name" content={siteMetadata.title} />
                  <meta property="og:description" content={siteMetadata.description} />
                  <meta
                    property="og:url"
                    content={`${siteMetadata.siteUrl}${location ? location.pathname : '/'}`}
                  />
                </Helmet>
                <MainNavigation
                  open={drawerIsOpen}
                  disableNav
                  onCloseNavMenu={this.closeDrawer}
                  toggleDrawer={this.toggleDrawer}
                />
                {isDocsLayout && (
                  <Navigation
                    title={siteMetadata.sidebarTitle || siteMetadata.title}
                    navigation={data.navigationMenus.edges}
                    open={drawerIsOpen}
                    onCloseNavMenu={this.closeDrawer}
                    toggleDrawer={this.toggleDrawer}
                  />
                )}
                <Overlay visible={drawerIsOpen} onClick={this.closeDrawer} />{' '}
                <LayoutMain>{children}</LayoutMain>
              </LayoutRoot>
            );
          }}
        </StaticQuery>
      </ThemeProvider>
    );
  }

  private toggleDrawer = () => {
    this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
  };

  private closeDrawer = () => {
    this.setState({ drawerIsOpen: false });
  };
}

export default Layout;

const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        sidebarTitle
        description
        siteUrl
        keywords
        author {
          name
          url
          email
        }
      }
    }
    navigationMenus: allTocJson {
      edges {
        node {
          title
          items {
            id
            slug
            title
          }
        }
      }
    }
  }
`;
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { WindowLocation } from '@reach/router';

import Header from 'components/layout/Header';
import Navigation from 'components/navigation/Navigation';
import LayoutRoot from 'components/layout/LayoutRoot';
import LayoutMain from 'components/layout/LayoutMain';
import theme from 'styles/theme';
import { ThemeProvider } from 'utils/styled';
import { MenuNode, GatsbyNode } from 'interfaces/nodes';
import { SiteMetadata } from 'interfaces/gatsby';

import '@kata-kit/fonts/museo-sans-rounded.css';
import '@kata-kit/fonts/kata-icons.css';
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css';

import Overlay from 'components/layout/Overlay';
import NavButton from 'components/navigation/NavButton';
import SlideoutDrawerButton from 'components/navigation/SlideoutDrawerButton';

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
    edges: GatsbyNode<MenuNode>[];
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
                  <title>
                    {siteMetadata.title} | {siteMetadata.description}
                  </title>
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
                <Header
                  open={drawerIsOpen}
                  disableNav
                  onCloseNavMenu={this.closeDrawer}
                  toggleDrawer={this.toggleDrawer}
                />
                {isDocsLayout && (
                  <React.Fragment>
                    <Navigation
                      title={siteMetadata.sidebarTitle || siteMetadata.title}
                      navigation={data.navigationMenus.edges}
                      location={location}
                      open={drawerIsOpen}
                      onCloseNavMenu={this.closeDrawer}
                      toggleDrawer={this.toggleDrawer}
                    />
                    <Overlay visible={drawerIsOpen} onClick={this.closeDrawer} />{' '}
                    <SlideoutDrawerButton drawerIsOpen={drawerIsOpen}>
                      <NavButton
                        onClick={this.toggleDrawer}
                        drawerIsOpen={drawerIsOpen}
                        size={14}
                      />
                    </SlideoutDrawerButton>
                  </React.Fragment>
                )}
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
            type
            title
          }
        }
      }
    }
  }
`;

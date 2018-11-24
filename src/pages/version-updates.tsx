import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import styled from 'utils/styled';

import { SiteMetadata } from 'interfaces/gatsby';
import Layout from 'layouts';

import Page from 'components/docs/Page';
import Container from 'components/layout/Container';
import Row from 'components/layout/Row';
import { breakpoints } from 'styles/variables';
import DocsHeader from 'components/docs/DocsHeader';

interface Props extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
  };
}

const VersionUpdatesPage: React.SFC<Props> = ({ data }) => (
  <Layout>
    <Page updatesPage>
      <Helmet>
        <title>What's New &middot; {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container medium>
        <Row>
          <LeftColumn>UpdatesList</LeftColumn>
          <RightColumn>
            <DocsHeader>
              <h1>What's new?</h1>
            </DocsHeader>
          </RightColumn>
        </Row>
      </Container>
    </Page>
  </Layout>
);

const LeftColumn = styled('div')`
  display: none;

  @media (min-width: ${breakpoints.lg}px) {
    display: block;
    flex: 0 0 33.33%;
  }
`;

const RightColumn = styled('div')`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  margin-left: 40px;
`;

export default VersionUpdatesPage;

export const query = graphql`
  query VersionUpdatesPageQuery {
    site {
      siteMetadata {
        title
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
    latestPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/version-updates/" } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
            layout
            date
          }
          frontmatter {
            title
            category
            version
          }
          html
        }
      }
    }
  }
`;

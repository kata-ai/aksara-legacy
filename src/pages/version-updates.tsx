import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import styled from 'utils/styled';

import { SiteMetadata, UpdatePost } from 'interfaces/gatsby';
import Layout from 'layouts';

import Page from 'components/docs/Page';
import Container from 'components/layout/Container';
import Row from 'components/layout/Row';
import Col from 'components/layout/Col';
import DocsHeader from 'components/docs/DocsHeader';
import DocsWrapper from 'components/docs/DocsWrapper';
import MarkdownContent from 'components/docs/MarkdownContent';
import { GatsbyNode } from 'interfaces/nodes';
import { breakpoints } from 'styles/variables';

interface Props extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    latestPosts: {
      edges: GatsbyNode<UpdatePost>[];
    };
  };
}

const VersionUpdatesPage: React.SFC<Props> = ({ data }) => (
  <Layout>
    <Page updatesPage>
      <Helmet>
        <title>What's New &middot; {data.site.siteMetadata.title}</title>
      </Helmet>
      <DocsWrapper>
        <Container large>
          <Row>
            <LeftColumn>UpdatesList</LeftColumn>
            <RightColumn>
              <DocsHeader>
                <h1>What's new?</h1>
              </DocsHeader>
              <LeadText>
                The latest news, updates, and changes to the Aksara Design Language System.
              </LeadText>
              <p>
                <strong>Legend:</strong>
              </p>
              <Row>
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
              </Row>
              {data.latestPosts.edges.map(({ node }) => (
                <Fragment>
                  <h2 key={node.id}>{node.frontmatter.title}</h2>
                  <MarkdownContent html={node.html} />
                </Fragment>
              ))}
            </RightColumn>
          </Row>
        </Container>
      </DocsWrapper>
    </Page>
  </Layout>
);

const LeadText = styled('p')`
  font-size: 24px;
  line-height: 30px;
  font-weight: 300;
`;

const LeftColumn = styled('div')`
  display: none;

  @media (min-width: ${breakpoints.lg}px) {
    display: block;
    flex: 0 0 208px;
  }
`;

const RightColumn = styled('div')`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  @media (min-width: ${breakpoints.lg}px) {
    margin-left: 40px;
  }
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

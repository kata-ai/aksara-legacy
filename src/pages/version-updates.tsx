import React from 'react';
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
import { GatsbyNode } from 'interfaces/nodes';
import { breakpoints, fontSizes, lineHeights } from 'styles/variables';
import VersionUpdate from 'components/updates/VersionUpdate';
import UpdateIcon from 'components/updates/UpdateIcon';
import UpdatesList from 'components/updates/UpdatesList';

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
          <Row breakAt="lg">
            <LeftColumn>
              <UpdatesList postsList={data.latestPosts.edges} />
            </LeftColumn>
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
              <Row breakAt="md">
                <LegendColumn>
                  <LegendWrapper>
                    <UpdateIcon iconType="major" />
                    <LegendText>Major version update</LegendText>
                  </LegendWrapper>
                </LegendColumn>
                <LegendColumn>
                  <LegendWrapper>
                    <UpdateIcon iconType="minor" />
                    <LegendText>Minor version update</LegendText>
                  </LegendWrapper>
                </LegendColumn>
                <LegendColumn>
                  <LegendWrapper>
                    <UpdateIcon iconType="patch" />
                    <LegendText>Patch version update</LegendText>
                  </LegendWrapper>
                </LegendColumn>
              </Row>
              <PostsList>
                {data.latestPosts.edges.map(({ node }) => (
                  <VersionUpdate key={node.id} post={node} />
                ))}
              </PostsList>
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

const LegendWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LegendColumn = styled(Col)`
  &:not(:last-child) {
    margin-bottom: 16px;

    @media (min-width: ${breakpoints.lg}px) {
      margin-bottom: 0;
    }
  }
`;

const LegendText = styled('span')`
  display: block;
  margin-left: 16px;
  font-size: ${fontSizes.hecto};
  line-height: ${lineHeights.hecto};
  font-weight: 300;
`;

const PostsList = styled('div')`
  margin-top: 80px;
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
          }
          frontmatter {
            title
            version
            category
            header_image {
              ... on File {
                childImageSharp {
                  fluid(maxWidth: 752) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            date
            date_formatted: date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          htmlAst
        }
      }
    }
  }
`;

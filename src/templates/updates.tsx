import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import Page from 'components/docs/Page';
import Container from 'components/layout/Container';
import Row from 'components/layout/Row';
import Col from 'components/layout/Col';
import DocsWrapper from 'components/docs/DocsWrapper';
import Footer from 'components/layout/Footer';
import FooterWrapper from 'components/layout/FooterWrapper';
import UpdatesList from 'components/updates/UpdatesList';
import VersionUpdate from 'components/updates/VersionUpdate';

import Layout from 'layouts';
import { SiteMetadata, UpdatePost } from 'interfaces/gatsby';
import styled from 'utils/styled';
import { breakpoints } from 'styles/variables';
import { GatsbyNode } from 'interfaces/nodes';

interface UpdatesTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    latestPosts: {
      edges: GatsbyNode<UpdatePost>[];
    };
    markdownRemark: UpdatePost;
  };
}

const UpdatesTemplate: React.SFC<UpdatesTemplateProps> = ({ data }) => {
  const { markdownRemark, site } = data;

  return (
    <Layout>
      <Page updatesPage>
        <Helmet>
          <title>
            {markdownRemark.frontmatter.title} | What's New | {site.siteMetadata.title}
          </title>
          <meta name="description" content={markdownRemark.excerpt} />
          <meta property="og:title" content={markdownRemark.frontmatter.title} />
          <meta property="og:description" content={markdownRemark.excerpt} />
        </Helmet>
        <DocsWrapper>
          <Container large>
            <Row breakAt="lg">
              <LeftColumn>
                <UpdatesList postsList={data.latestPosts.edges} />
              </LeftColumn>
              <RightColumn>
                <VersionUpdate post={markdownRemark} />
              </RightColumn>
            </Row>
          </Container>
        </DocsWrapper>
        <FooterWrapper>
          <Container>
            <Footer />
          </Container>
        </FooterWrapper>
      </Page>
    </Layout>
  );
};

const LeftColumn = styled(Col)`
  display: none;

  @media (min-width: ${breakpoints.lg}px) {
    display: block;
    flex: 0 0 208px;
  }
`;

const RightColumn = styled(Col)`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  @media (min-width: ${breakpoints.lg}px) {
    margin-left: 40px;
  }
`;

export default UpdatesTemplate;

export const query = graphql`
  query UpdatesTemplateQuery($slug: String!) {
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
            subtitle
            version
            category
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
        layout
      }
      frontmatter {
        title
        subtitle
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
`;

import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import Page from 'components/docs/Page';
import Container from 'components/layout/Container';
import DocsWrapper from 'components/docs/DocsWrapper';
import Footer from 'components/layout/Footer';
import FooterWrapper from 'components/layout/FooterWrapper';

import Layout from 'layouts';
import { SiteMetadata, UpdatePost } from 'interfaces/gatsby';
import VersionUpdate from 'components/updates/VersionUpdate';

interface UpdatesTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
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
          <Container medium>
            <VersionUpdate post={markdownRemark} />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`;

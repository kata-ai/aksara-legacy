import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import Page from 'components/docs/Page';
import Container from 'components/layout/Container';
import { SiteMetadata } from 'interfaces/gatsby';
import MarkdownContent from 'components/docs/MarkdownContent';
import DocsWrapper from 'components/docs/DocsWrapper';
import DocsHeader from 'components/docs/DocsHeader';
import Footer from 'components/layout/Footer';
import FooterWrapper from 'components/layout/FooterWrapper';

import Layout from 'layouts';

interface UpdatesTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
        version: string;
        category: string;
        date: string;
      };
    };
  };
}

const UpdatesTemplate: React.SFC<UpdatesTemplateProps> = ({ data }) => {
  const { markdownRemark, site } = data;

  return (
    <Layout>
      <Page updatesPage>
        <Helmet>
          <title>
            {markdownRemark.frontmatter.title} &middot; {site.siteMetadata.title}
          </title>
          <meta name="description" content={markdownRemark.excerpt} />
          <meta property="og:title" content={markdownRemark.frontmatter.title} />
          <meta property="og:description" content={markdownRemark.excerpt} />
        </Helmet>
        <DocsWrapper>
          <Container medium>
            <DocsHeader>
              <h1>{markdownRemark.frontmatter.title}</h1>
            </DocsHeader>
            <MarkdownContent html={markdownRemark.html} />
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
      html
      excerpt
      frontmatter {
        title
        version
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

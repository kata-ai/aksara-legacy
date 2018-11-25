import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import Page from 'components/docs/Page';
import Container from 'components/layout/Container';
import { MarkdownWrapper } from 'components/docs/MarkdownContent';
import DocsWrapper from 'components/docs/DocsWrapper';
import DocsHeader from 'components/docs/DocsHeader';
import Footer from 'components/layout/Footer';
import FooterWrapper from 'components/layout/FooterWrapper';

import Layout from 'layouts';
import { SiteMetadata } from 'interfaces/gatsby';
import renderAst from 'utils/renderAst';

interface UpdatesTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    markdownRemark: {
      htmlAst: object;
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
            <MarkdownWrapper>{renderAst(markdownRemark.htmlAst)}</MarkdownWrapper>
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
      htmlAst
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

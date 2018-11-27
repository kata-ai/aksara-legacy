import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import Page from 'components/docs/Page';
import Container from 'components/layout/Container';
import getPageById from 'utils/getPageById';
import { MenuNode, GatsbyNode } from 'interfaces/nodes';
import { SiteMetadata } from 'interfaces/gatsby';
import { MarkdownWrapper } from 'components/docs/MarkdownContent';
import DocsWrapper from 'components/docs/DocsWrapper';
import DocsHeader from 'components/docs/DocsHeader';
import Pagination from 'components/docs/Pagination';
import Footer from 'components/layout/Footer';
import FooterWrapper from 'components/layout/FooterWrapper';

import Layout from 'layouts';
import renderAst from 'utils/renderAst';

interface PageTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    sectionList: {
      edges: GatsbyNode<MenuNode>[];
    };
    markdownRemark: {
      htmlAst: object;
      excerpt: string;
      frontmatter: {
        id: string;
        title: string;
        prev?: string;
        next?: string;
      };
    };
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const { markdownRemark, sectionList, site } = data;
  const { prev, next } = markdownRemark.frontmatter;
  const prevPage = getPageById(sectionList.edges, prev);
  const nextPage = getPageById(sectionList.edges, next);

  return (
    <Layout isDocsLayout>
      <Page docsPage>
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
            <MarkdownWrapper>{renderAst(true)(markdownRemark.htmlAst)}</MarkdownWrapper>
          </Container>
        </DocsWrapper>
        <FooterWrapper>
          <Container medium>
            {(prevPage || nextPage) && <Pagination prevPage={prevPage} nextPage={nextPage} />}
            <Footer />
          </Container>
        </FooterWrapper>
      </Page>
    </Layout>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
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
    sectionList: allTocJson {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      frontmatter {
        id
        title
        prev
        next
      }
    }
  }
`;

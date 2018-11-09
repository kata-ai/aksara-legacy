import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import Page from 'components/Page';
import Container from 'components/Container';
import DocsWrapper from 'components/DocsWrapper';
import FooterWrapper from 'components/FooterWrapper';
import Footer from 'components/Footer';

import HomeLayout from '../layouts/homeLayout';
import Banner from '../components/home/Banner';

interface PageTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
  };
}

const IndexPage: React.SFC<PageTemplateProps> = () => {
  return (
    <HomeLayout>
      <Page docsPage>
        <Helmet>
          <meta property="og:title" content="Home" />
        </Helmet>
        <DocsWrapper>
          <Banner />
        </DocsWrapper>
        <FooterWrapper>
          <Container>
            <Footer />
          </Container>
        </FooterWrapper>
      </Page>
    </HomeLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeTemplateQuery {
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
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import styled from 'utils/styled';
import Page from 'components/Page';
import Container from 'components/Container';
import DocsWrapper from 'components/DocsWrapper';
import FooterWrapper from 'components/FooterWrapper';
import Footer from 'components/Footer';

import HomeLayout from 'layouts/homeLayout';
import Banner from 'components/home/Banner';

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
        <SectionFor>
          <Container extralarge>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ea dolores officiis aut labore omnis cupiditate tempore nemo consequatur,
            earum debitis blanditiis aperiam non beatae impedit aliquid, possimus ab pariatur a.
          </Container>
        </SectionFor>
        <FooterWrapper>
          <Container>
            <Footer />
          </Container>
        </FooterWrapper>
      </Page>
    </HomeLayout>
  );
};

const SectionFor = styled('div')`
  margin-top: 112px;
  padding: 120px 0px 120px 0px;
  min-height: 550px;
  color: ${props => props.theme.colors.white};
  background-image: linear-gradient(
      67deg, ${props => props.theme.colors.kata03},
      ${props => props.theme.colors.accentDark} 32%,
      ${props => props.theme.colors.brand} 60%,
      ${props => props.theme.colors.softblue},
      ${props => props.theme.colors.softblue},
      ${props => props.theme.colors.softblue}
  );
`;

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

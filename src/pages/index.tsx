import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import { breakpoints } from 'styles/variables';

import styled from 'utils/styled';
import Page from 'components/Page';
import Container from 'components/Container';
import DocsWrapper from 'components/DocsWrapper';
import FooterWrapper from 'components/FooterWrapper';
import Footer from 'components/Footer';

import Layout from 'layouts';
import Banner from 'components/home/Banner';
import Card from 'components/custom/card';

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
    <Layout>
      <Page>
        <Helmet>
          <meta property="og:title" content="Home" />
        </Helmet>
        <DocsWrapper>
          <Banner />
        </DocsWrapper>
        <SectionFor>
          <Container extralarge>
            <TitleSectionFor>Created for Designers and Built for Developers</TitleSectionFor>
            <Row>
              <Col>
                <Card isHomepage>
                  These principles help us to make tough design decisions and refine many iterations
                  into the best solution for creating Aksara.
                </Card>
              </Col>
              <Col>
                <Card isHomepage>
                  We build neat design guidelines with the best practice using for each component
                  based on continuous research and exploration.
                </Card>
              </Col>
              <Col>
                <Card isHomepage>
                  The communication we use to influence how people think and feel about our product
                  while using it.
                </Card>
              </Col>
            </Row>
          </Container>
        </SectionFor>
        <FooterWrapper>
          <Container>
            <Footer />
          </Container>
        </FooterWrapper>
      </Page>
    </Layout>
  );
};

const SectionFor = styled('div')`
  margin-top: 112px;
  padding: 120px 0px 120px 0px;
  min-height: 550px;
  background-image: linear-gradient(
    67deg,
    ${props => props.theme.colors.kata03},
    ${props => props.theme.colors.accentDark} 32%,
    ${props => props.theme.colors.brand} 60%,
    ${props => props.theme.colors.softblue},
    ${props => props.theme.colors.softblue},
    ${props => props.theme.colors.softblue}
  );
`;

const TitleSectionFor = styled('h1')`
  font-weight: 500;
  text-align: center;
  font-size: 32px;
  color: ${props => props.theme.colors.white};
  margin-bottom: 40px;
`;

const Row = styled('div')`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Col = styled('div')`
  flex: 0 1 calc(33.3% - 15px);
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

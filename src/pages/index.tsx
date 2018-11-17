import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import { breakpoints } from 'styles/variables';

import styled from 'utils/styled';
import Page from 'components/Page';
import Container from 'components/Container';
import FooterWrapper from 'components/FooterWrapper';
import Footer from 'components/Footer';

import Layout from 'layouts';
import Banner from 'components/home/Banner';
import Card from 'components/custom/card';
import GeometricShapes from 'components/home/GeometricShapes';

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

// TODO: convert the hardcoded styles in geometrics to styled-components
const IndexPage: React.SFC<PageTemplateProps> = () => {
  return (
    <Layout>
      <Page>
        <Helmet>
          <meta property="og:title" content="Home" />
        </Helmet>
        <Banner />
        <SectionFor>
          <GeometricShapes topLeft src={require('assets/images/geometric-1.svg')} />
          <GeometricShapes topRight src={require('assets/images/geometric-2.svg')} />
          <SectionContainer extralarge>
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
          </SectionContainer>
          <GeometricShapes bottomLeft src={require('assets/images/geometric-3.svg')} />
          <GeometricShapes bottomRight src={require('assets/images/geometric-4.svg')} />
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

const SectionContainer = styled(Container)`
  position: relative;
  z-index: 5;
`;

const SectionFor = styled('section')`
  position: relative;
  padding: 80px ${props => props.theme.dimensions.containerPadding.mobile};
  min-height: 550px;
  background-image: linear-gradient(
    67deg,
    ${props => props.theme.colors.kata03},
    ${props => props.theme.colors.accentDark} 32%,
    ${props => props.theme.colors.brand} 60%,
    ${props => props.theme.colors.softblue} 99%,
    ${props => props.theme.colors.softblue},
    ${props => props.theme.colors.softblue}
  );

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    padding: 80 ${props => props.theme.dimensions.containerPadding.tablet};
  }

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    padding: 80 ${props => props.theme.dimensions.containerPadding.tablet};
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    padding: 80 ${props => props.theme.dimensions.containerPadding.desktop};
  }
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

  @media (min-width: ${breakpoints.lg}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Col = styled('div')`
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    flex: 0 1 calc(33.3% - 15px);
  }
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

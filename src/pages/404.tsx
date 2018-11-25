import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import Page from 'components/docs/Page';
import NotFoundWrapper from 'components/NotFoundWrapper';
import styled from 'utils/styled';
import { SiteMetadata } from 'interfaces/gatsby';
import Layout from 'layouts';
import { fontSizes, lineHeights, colors } from 'styles/variables';

interface Props extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
  };
}

const NotFoundPage: React.SFC<Props> = ({ data }) => (
  <Layout>
    <Page>
      <Helmet>
        <title>404: Page not found. &middot; {data.site.siteMetadata.title}</title>
      </Helmet>
      <NotFoundWrapper>
        <Inner>
          <Title>404</Title>
          <Body>We can't find the page you're looking for.</Body>
          <Body>
            <Link to="/">Go back?</Link>
          </Body>
        </Inner>
      </NotFoundWrapper>
    </Page>
  </Layout>
);

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
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

const Inner = styled('div')`
  text-align: center;
`;

const Title = styled('h1')`
  font-size: 60px;
  line-height: 1;
  margin: 0;
  font-weight: 500;
  color: ${colors.neutral06};
`;

const Body = styled('p')`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: ${fontSizes.mega};
  line-height: ${lineHeights.mega};
  color: ${colors.neutral06};
`;

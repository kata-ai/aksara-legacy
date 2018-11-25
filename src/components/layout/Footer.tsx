import React from 'react';
import styled from 'utils/styled';
import Container from './Container';
import { breakpoints, fontSizes } from 'styles/variables';
import Row from './Row';
import Col from './Col';

const Wrapper = styled('footer')`
  margin-top: ${props => props.theme.dimensions.containerPadding.desktop};
  padding: ${props => props.theme.dimensions.containerPadding.mobile} 0;
  border-top: 1px solid ${props => props.theme.colors.border};
  font-size: ${fontSizes.deka};
  line-height: 16px;
  font-weight: 300;

  @media (max-width: ${breakpoints.lg - 1}px) {
    padding-bottom: 5rem;
  }
`;

const FooterLeft = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.md}px) {
    justify-content: flex-start;
    margin-bottom: 0;
  }

  p {
    margin: 0;
  }

  img {
    vertical-align: middle;
    margin-right: 8px;
  }
`;

const FooterRight = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.md}px) {
    justify-content: flex-end;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      display: inline;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  img {
    vertical-align: middle;
  }
`;

const Footer: React.SFC = () => (
  <Container extralarge>
    <Wrapper>
      <Row breakAt="md">
        <Col>
          <FooterLeft>
            <img src={require('assets/images/kata-default.svg')} alt="Kata.ai Logo" />
            <p>&copy; 2018 Kata.ai | All rights reserved</p>
          </FooterLeft>
        </Col>
        <Col>
          <FooterRight>
            <ul>
              <li>
                <a href="https://www.facebook.com/katadotai/">
                  <img src={require('assets/images/facebook.svg')} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/KataDotAI/">
                  <img src={require('assets/images/twitter.svg')} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/katadotai/">
                  <img src={require('assets/images/instagram.svg')} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/yesboss/">
                  <img src={require('assets/images/linkedin.svg')} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://medium.com/kata-engineering">
                  <img src={require('assets/images/medium.svg')} alt="Medium" />
                </a>
              </li>
              <li>
                <a href="https://github.com/kata-ai">
                  <img src={require('assets/images/github.svg')} alt="GitHub" />
                </a>
              </li>
            </ul>
          </FooterRight>
        </Col>
      </Row>
    </Wrapper>
  </Container>
);

export default Footer;

import React from 'react';
import styled from 'utils/styled';
import Container from './Container';
import { breakpoints } from 'styles/variables';
import Row from './Row';
import Col from './Col';

const Wrapper = styled('footer')`
  margin-top: ${props => props.theme.dimensions.containerPadding.desktop};
  padding: ${props => props.theme.dimensions.containerPadding.mobile} 0;
  border-top: 1px solid ${props => props.theme.colors.border};

  p {
    margin: 0;
  }

  @media (max-width: ${breakpoints.lg - 1}px) {
    padding-bottom: 5rem;
  }
`;

const Footer: React.SFC = () => (
  <Container extralarge>
    <Wrapper>
      <Row>
        <Col>
          <p>
            <small>
              Created with{' '}
              <a
                href="https://github.com/kata-ai/grundgesetz-skeleton"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grundgesetz
              </a>
              .
            </small>
          </p>
        </Col>
      </Row>
    </Wrapper>
  </Container>
);

export default Footer;

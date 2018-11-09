import React from 'react';
import Container from '../Container';
import styled from 'utils/styled';
import { Row, Col } from 'react-flexbox-grid';
import { breakpoints } from 'styles/variables';

import LogoImage from '../../assets/images/aksara-logo-banner.svg';
import BannerImage from '../../assets/images/main.svg';
import Button from '../custom/button';

const Wrapper = styled('div')`
  margin-top: 136px;
  @media (max-width: ${breakpoints.md - 1}px) {
    margin-top: 56px;
  }
`;

const InnerWrapper = styled('div')`
  margin-top: 16px;
  margin-bottom: 32px;
`;

const Intro = styled('span')`
  color: ${props => props.theme.colors.gray.copy};
  font-family: 'MuseoSansRounded-700';
  line-height: 20px;
  font-size: ${props => `${props.theme.dimensions.fontSize.medium}px`};
`;

const Description = styled('p')`
  color: ${props => props.theme.colors.gray.copy};
  font-family: 'MuseoSansRounded-300';
  line-height: 20px;
  font-size: ${props => `${props.theme.dimensions.fontSize.medium}px`};
  margin-bottom: 32px;
`;

const Banner: React.SFC = () => (
  <Container large>
    <Wrapper>
      <Row>
        <Col xs={12} md={6}>
          <img src={LogoImage} />
          <InnerWrapper>
            <Description>
              <Intro>Aksara /ak·sa·ra/ noun</Intro>
            </Description>
            <Description>
              is a system of visual symbol, usually stamped on paper or other media (stone, wood, leaf, and fabric),
              to express thoughts and ideas.
            </Description>
            <Description>
              <Intro>Aksara</Intro> is Kata Design Language System.
              It contains foundations, voice and tone guidelines, component standards,
              and other guidelines that systematically improve quality, timeliness, and consistency to our product.
            </Description>
          </InnerWrapper>
          <Button primary text="Learn More" to="/" />
        </Col>
        <Col xs={12} md={6}>
          <img src={BannerImage} />
        </Col>
      </Row>
    </Wrapper>
  </Container>
);

export default Banner;

import React from 'react';
import Container from '../Container';
import styled from 'utils/styled';
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

const LogoWrapper = styled('div')`
  text-align: left;
`;

const BanerWrapper = styled('div')`
  text-align: right;
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

const BannerRow = styled('div')`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BannerCol = styled('div')`
  flex: 0 1 calc(50% - 16px);
`;

const Banner: React.SFC = () => (
  <Container large>
    <Wrapper>
      <BannerRow>
        <BannerCol>
          <LogoWrapper>
            <img src={LogoImage} />
          </LogoWrapper>
          <InnerWrapper>
            <Description>
              <Intro>Aksara /ak·sa·ra/ noun</Intro>
            </Description>
            <Description>
              is a system of visual symbol, usually stamped on paper or other media (stone, wood,
              leaf, and fabric), to express thoughts and ideas.
            </Description>
            <Description>
              <Intro>Aksara</Intro> is Kata Design Language System. It contains foundations, voice
              and tone guidelines, component standards, and other guidelines that systematically
              improve quality, timeliness, and consistency to our product.
            </Description>
          </InnerWrapper>
          <Button primary text="Learn More" to="/getting-started/deploying/" />
        </BannerCol>
        <BannerCol>
          <BanerWrapper>
            <img src={BannerImage} />
          </BanerWrapper>
        </BannerCol>
      </BannerRow>
    </Wrapper>
  </Container>
);

export default Banner;

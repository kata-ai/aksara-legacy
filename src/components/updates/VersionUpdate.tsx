import React from 'react';
import styled from 'utils/styled';
import Img from 'gatsby-image';

import { UpdatePost } from 'interfaces/gatsby';
import UpdateIcon from './UpdateIcon';
import { colors, fontSizes, lineHeights, elevationShadow } from 'styles/variables';
import renderAst from 'utils/renderAst';
import { MarkdownWrapper } from 'components/docs/MarkdownContent';

interface VersionUpdateProps {
  post: UpdatePost;
}

const PostHeaderIcon = styled('div')`
  display: flex;
  flex-direction: column;
`;

const PostHeaderRight = styled('div')`
  flex: 1 1 auto;
  margin-left: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Title = styled('h1')`
  margin: 0;
  font-size: ${fontSizes.giga};
  line-height: ${lineHeights.giga};
  font-weight: 500;
`;

const Time = styled('time')`
  display: block;
  margin-top: 8px;
  margin-bottom: 0;
  font-size: ${fontSizes.hecto};
  line-height: ${lineHeights.hecto};
  font-weight: 300;
`;

const HeaderLine = styled('div')`
  flex: 1 1 auto;
  width: 4px;
  min-height: 34px;
  margin-left: 18px;
  border-radius: 2px;
  background-color: ${colors.neutral04};
`;

const PostHeader = styled('header')`
  display: flex;
  flex-direction: row;
`;

const PostContent = styled('section')`
  background-color: ${colors.neutral01};
  border-radius: 6px;
  box-shadow: ${elevationShadow.elevationZ100};
  overflow: hidden;
`;

const PostBody = styled('div')`
  margin: 24px 16px;
`;

const PostTitle = styled('h2')`
  margin-top: 0;
  font-size: ${fontSizes.mega};
  line-height: ${lineHeights.mega};
  font-weight: 500;
`;

const FooterLine = styled('div')`
  width: 4px;
  height: 72px;
  margin-left: 18px;
  border-radius: 2px;
  background-color: ${colors.neutral04};
`;

const PostFooter = styled('div')``;

const Root = styled('article')`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:last-child {
    ${PostFooter} {
      display: none;
    }
  }
`;

const VersionUpdate: React.FC<VersionUpdateProps> = ({ post }) => (
  <Root>
    <PostHeader>
      <PostHeaderIcon>
        <UpdateIcon large withImage iconType={post.frontmatter.category} />
        <HeaderLine />
      </PostHeaderIcon>
      <PostHeaderRight>
        <Title>Version {post.frontmatter.version}</Title>
        <Time dateTime={post.frontmatter.date}>{post.frontmatter.date_formatted}</Time>
      </PostHeaderRight>
    </PostHeader>
    <PostContent>
      <Img
        fluid={post.frontmatter.header_image.childImageSharp.fluid}
        style={{ maxHeight: '240px' }}
      />
      <PostBody>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <MarkdownWrapper>{renderAst()(post.htmlAst)}</MarkdownWrapper>
      </PostBody>
    </PostContent>
    <PostFooter>
      <FooterLine />
    </PostFooter>
  </Root>
);

export default VersionUpdate;

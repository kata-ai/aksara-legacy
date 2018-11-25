import React from 'react';
import styled from 'utils/styled';
import { breakpoints, fontSizes, lineHeights, colors } from 'styles/variables';

interface MarkdownContentProps {
  className?: string;
  html: string;
}

const MarkdownContent: React.SFC<MarkdownContentProps> = ({ className, html }) => (
  <MarkdownWrapper className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

export default MarkdownContent;

export const MarkdownWrapper = styled('section')`
  font-size: ${fontSizes.hecto};
  line-height: ${lineHeights.hecto};
  font-weight: 300;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 48px;
    margin-bottom: 16px;
    color: ${colors.neutral09};
    font-weight: 500;
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${fontSizes.peta};
    line-height: ${lineHeights.peta};
  }

  h2 {
    font-size: ${fontSizes.tera};
    line-height: ${lineHeights.tera};
  }

  h3 {
    font-size: ${fontSizes.giga};
    line-height: ${lineHeights.giga};
  }

  h4 {
    font-size: ${fontSizes.mega};
    line-height: ${lineHeights.mega};
  }

  h5,
  h6 {
    font-size: ${fontSizes.kilo};
    line-height: ${lineHeights.kilo};
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .text-primary {
    font-weight: 300;
    font-size: ${fontSizes.giga};
    line-height: ${lineHeights.giga};

    strong {
      font-weight: 500;
    }

    @media (min-width: ${breakpoints.md}px) {
      font-size: ${fontSizes.tera};
      line-height: ${lineHeights.tera};
    }
  }

  strong {
    font-weight: 700;
    color: ${colors.neutral09};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.45rem;

    li {
      padding-left: 0;
      margin-bottom: 0.5rem;
    }
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: 0.5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.neutral02};
  }

  blockquote {
    margin: 0.8rem 0;
    padding: 0.5rem 1rem;
    border-left: 0.25rem solid ${colors.neutral02};
    color: ${colors.neutral06};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${breakpoints.md}px) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
  li + li {
    margin-top: 0.25rem;
  }

  .principle {
    &:not(:last-child) {
      margin-top: 40px;
      margin-bottom: 80px;
    }
  }

  .principle-image {
    > * {
      margin: 0;
    }

    .gatsby-resp-image-wrapper {
      margin: 0 !important;
    }
  }

  .principle-content {
    h2,
    h3,
    h4 {
      margin-top: 32px;

      @media (min-width: ${breakpoints.md}px) {
        margin-top: 0;
      }
    }
  }

  .gatsby-highlight {
    margin: 1rem 0;
    font-size: 90%;
  }

  code,
  pre {
    white-space: pre-wrap;
    word-break: break-word;
  }

  code {
    font-size: 80%;
    white-space: pre-wrap;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow-x: auto;
  }

  pre code {
    padding: 0;
    font-size: 90%;
    color: inherit;
    background-color: transparent;
  }

  a[href^='#fn-'],
  a[href^='#fnref-'] {
    display: inline-block;
    margin-left: 0.1rem;
    font-weight: bold;
  }

  .footnotes {
    margin-top: 2rem;
    font-size: 85%;

    li[id^='fn-'] {
      p {
        /* Remark for some reason puts the footnote reflink *after* the 'p' tag. */
        display: inline;
      }
    }
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;

    @media (min-width: ${breakpoints.md}px) {
      font-size: 1.5rem;
    }
  }
`;

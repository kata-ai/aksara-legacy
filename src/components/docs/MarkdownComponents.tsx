import styled, { css } from 'utils/styled';
import { colors, fontSizes, lineHeights, breakpoints } from 'styles/variables';

const HeadingsBase = css`
  margin-bottom: 16px;
  color: ${colors.neutral09};
  font-weight: 500;
  text-rendering: optimizeLegibility;
`;

export const H1 = styled('h1')`
  ${HeadingsBase}
  margin-top: 0;
  font-size: ${fontSizes.peta};
  line-height: ${lineHeights.peta};
`;

export const H2 = styled('h2')`
  ${HeadingsBase}
  margin-top: 48px;
  font-size: ${fontSizes.tera};
  line-height: ${lineHeights.tera};
`;

export const H3 = styled('h3')`
  ${HeadingsBase}
  margin-top: 48px;
  font-size: ${fontSizes.giga};
  line-height: ${lineHeights.giga};
`;

export const H4 = styled('h4')`
  ${HeadingsBase}
  margin-top: 48px;
  font-size: ${fontSizes.mega};
  line-height: ${lineHeights.mega};
`;

export const H5 = styled('h5')`
  ${HeadingsBase}
  margin-top: 48px;
  font-size: ${fontSizes.kilo};
  line-height: ${lineHeights.kilo};
`;

export const P = styled('p')`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: ${fontSizes.hecto};
  line-height: ${lineHeights.hecto};
  font-weight: 300;
`;

export const TextPrimary = styled('div')`
  ${P} {
    font-weight: 300;
    font-size: ${fontSizes.giga};
    line-height: ${lineHeights.giga};

    @media (min-width: ${breakpoints.md}px) {
      font-size: ${fontSizes.tera};
      line-height: ${lineHeights.tera};
    }
  }

  strong {
    font-weight: 500;
  }
`;

export const Blockquote = styled('blockquote')`
  margin: 0.8rem 0;
  padding: 0.5rem 1rem;
  border-left: 0.25rem solid ${colors.neutral02};
  color: ${colors.neutral06};

  ${P} {
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${breakpoints.md}px) {
    padding-right: 5rem;
    padding-left: 1.25rem;
  }
`;

export const Table = styled('table')`
  width: 100%;
  border-collapse: collapse;

  thead {
    border-bottom: 2px solid ${colors.neutral04};

    th {
      padding: 8px 24px;
      font-style: normal;
      font-stretch: normal;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      text-align: left;
      color: ${colors.neutral06};
    }
  }

  tfoot {
    tr {
      td {
        padding: 16px 24px 8px;
        vertical-align: top;
        font-style: normal;
        font-stretch: normal;
        font-weight: 700;
        letter-spacing: -0.01em;
        text-transform: uppercase;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 16px 24px 8px;
        vertical-align: top;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        color: inherit;
      }
    }
  }
`;

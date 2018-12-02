import React from 'react';
import Link from 'gatsby-link';
import styled from 'utils/styled';
import { MenuItem } from 'interfaces/nodes';
import { colors, fontSizes, lineHeights, breakpoints } from 'styles/variables';

const Wrapper = styled('aside')`
  border-collapse: collapse;
  border-radius: 4px;
  overflow: hidden;
`;

const WrapperInner = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PaginationItem = styled('div')`
  display: flex;
  position: relative;
  flex: 1 0 auto;
  align-items: center;
  height: 96px;
  padding: 0 24px;
  border: 1px solid ${colors.neutral04};

  @media (min-width: ${breakpoints.lg}) {
    flex: 1 0 50%;
  }

  &:not(:first-child) {
    border-left: none;
  }

  &:first-child {
    justify-content: flex-start;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    text-align: left;
  }

  &:last-child {
    justify-content: flex-end;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: right;
  }
`;

const PaginationButton = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: transparent;
  transition: all 0.3s ease;

  svg {
    g {
      fill: ${colors.neutral08};
    }
  }

  &:first-child {
    margin-right: 24px;
  }

  &:last-child {
    margin-left: 24px;
  }
`;

const PaginationTitle = styled('span')`
  display: inline-block;
  margin-top: 8px;
  margin-bottom: 0;
  font-size: ${fontSizes.hecto};
  line-height: ${lineHeights.hecto};
  color: ${colors.neutral08};
`;

const PaginationHeading = styled('span')`
  display: block;
  margin: 0;
  font-size: ${fontSizes.deka};
  line-height: ${lineHeights.deka};
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${colors.neutral06};
`;

const PaginationBlock = styled('div')`
  transition: all 0.3s ease;
`;

const PaginationLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  font-size: ${fontSizes.hecto};
  line-height: ${lineHeights.hecto};
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    text-decoration: none;

    ${PaginationTitle} {
      color: ${colors.kata02};
    }
  }

  &:hover {
    ${PaginationButton} {
      background-color: ${colors.neutral04};

      svg {
        g {
          fill: ${colors.neutral08};
        }
      }
    }
  }

  &:focus {
    ${PaginationButton} {
      background-color: ${colors.neutral08};

      svg {
        g {
          fill: ${colors.neutral01};
        }
      }
    }
  }
`;

interface PaginationProps {
  prevPage?: MenuItem;
  nextPage?: MenuItem;
}

const Pagination: React.SFC<PaginationProps> = ({ prevPage, nextPage }) => (
  <Wrapper>
    <WrapperInner>
      <PaginationItem>
        {prevPage && (
          <PaginationLink to={prevPage.slug}>
            <PaginationButton>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <path
                    id="ic-chevron-left"
                    d="M.238 8.565l7.329 7.187a.837.837 0 0 0 1.164 0 .795.795 0 0 0 0-1.14L1.984 7.994l6.747-6.617a.796.796 0 0 0 0-1.141.837.837 0 0 0-1.165 0L.237 7.423a.804.804 0 0 0 .001 1.142z"
                  />
                </defs>
                <g fill="none" fill-rule="evenodd" transform="translate(8 4)">
                  <mask id="ic-chevron-left-mask" fill="#fff">
                    <use xlinkHref="#ic-chevron-left" />
                  </mask>
                  <use fill="none" fill-rule="nonzero" xlinkHref="#ic-chevron-left" />
                  <g fill="none" mask="url(#ic-chevron-left-mask)">
                    <path d="M-8-4h24v24H-8z" />
                  </g>
                </g>
              </svg>
            </PaginationButton>
            <PaginationBlock>
              <PaginationHeading>Previous</PaginationHeading>
              <PaginationTitle>{prevPage.title}</PaginationTitle>
            </PaginationBlock>
          </PaginationLink>
        )}
      </PaginationItem>

      <PaginationItem>
        {nextPage && (
          <PaginationLink to={nextPage.slug}>
            <PaginationBlock>
              <PaginationHeading>Next</PaginationHeading>
              <PaginationTitle>{nextPage.title}</PaginationTitle>
            </PaginationBlock>
            <PaginationButton>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <path
                    id="ic-chevron-right"
                    d="M8.742 7.423L1.414.236a.837.837 0 0 0-1.165 0 .795.795 0 0 0 0 1.14l6.747 6.618L.25 14.61a.796.796 0 0 0 0 1.141.837.837 0 0 0 1.165 0l7.328-7.187a.803.803 0 0 0 0-1.142z"
                  />
                </defs>
                <g fill="none" fill-rule="evenodd" transform="translate(8 4)">
                  <mask id="ic-chevron-right-mask" fill="#fff">
                    <use xlinkHref="#ic-chevron-right" />
                  </mask>
                  <use fill="none" fill-rule="nonzero" xlinkHref="#ic-chevron-right" />
                  <g fill="none" mask="url(#ic-chevron-right-mask)">
                    <path d="M-8-4h24v24H-8z" />
                  </g>
                </g>
              </svg>
            </PaginationButton>
          </PaginationLink>
        )}
      </PaginationItem>
    </WrapperInner>
  </Wrapper>
);

export default Pagination;

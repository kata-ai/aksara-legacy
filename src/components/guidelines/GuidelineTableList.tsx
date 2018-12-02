import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes, lineHeights } from 'styles/variables';

interface GuidelineTableListItemProps {
  guide: 'do' | 'dont';
}

const Logo = styled('div')`
  width: 24px;
  height: 24px;
`;

const Li = styled<GuidelineTableListItemProps, 'li'>('li')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  svg {
    g {
      fill: ${props => (props.guide === 'do' ? colors.green01 : colors.red02)};
    }
  }
`;

const Span = styled('span')`
  display: inline-block;
  font-size: ${fontSizes.hecto};
  line-height: ${lineHeights.hecto};
  margin-left: 16px;
`;

export const GuidelineTableList = styled('ul')`
  margin: 0;
  padding: 0 !important;
  list-style-type: none;

  ${Li} + ${Li} {
    margin-top: 8px;
  }
`;

export const GuidelineTableListItem: React.FC<GuidelineTableListItemProps> = ({
  guide,
  children
}) => (
  <Li guide={guide}>
    <Logo>
      {guide === 'do' ? (
        <svg width="20" height="20" viewBox="0 0 24 24">
          <defs>
            <path
              id="ic-filled-check"
              d="M8 0C3.564 0 0 3.564 0 8s3.564 8 8 8 8-3.564 8-8-3.564-8-8-8zm4.618 5.49L6.8 11.528a.33.33 0 0 1-.255.11c-.109 0-.218-.037-.254-.11L3.455 8.473 3.382 8.4a.393.393 0 0 1-.11-.255c0-.072.037-.181.11-.254l.509-.51a.352.352 0 0 1 .509 0l.036.037 2 2.146a.176.176 0 0 0 .255 0l4.873-5.055h.036a.352.352 0 0 1 .51 0l.508.51c.146.108.146.326 0 .472z"
            />
          </defs>
          <g fill="none" fill-rule="evenodd" transform="translate(4 4)">
            <mask id="ic-filled-check-mask" fill="#fff">
              <use xlinkHref="#ic-filled-check" />
            </mask>
            <use fill="none" fill-rule="nonzero" xlinkHref="#ic-filled-check" />
            <g fill="none" mask="url(#ic-filled-check-mask)">
              <path d="M-4-4h24v24H-4z" />
            </g>
          </g>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24">
          <defs>
            <path
              id="ic-filled-x"
              d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm2.77-6.338L9.108 8l1.662-1.662A.783.783 0 1 0 9.662 5.23L8 6.892 6.337 5.23A.783.783 0 1 0 5.23 6.338L6.891 8 5.23 9.662a.784.784 0 0 0 1.108 1.108L8 9.108l1.662 1.662a.781.781 0 0 0 1.108 0 .783.783 0 0 0 0-1.108z"
            />
          </defs>
          <g fill="none" fill-rule="evenodd" transform="translate(4 4)">
            <mask id="ic-filled-x-mask" fill="#fff">
              <use xlinkHref="#ic-filled-x" />
            </mask>
            <use fill="none" xlinkHref="#ic-filled-x" />
            <g fill="none" mask="url(#ic-filled-x-mask)">
              <path d="M-4-4h24v24H-4z" />
            </g>
          </g>
        </svg>
      )}
    </Logo>
    <Span>{children}</Span>
  </Li>
);

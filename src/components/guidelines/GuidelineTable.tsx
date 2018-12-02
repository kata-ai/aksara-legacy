import React from 'react';
import styled from 'utils/styled';

import { Table, ResponsiveTableWrapper } from '../docs/MarkdownComponents';
import { fontSizes, lineHeights } from 'styles/variables';

interface GuidelineTableProps {
  title: string;
}

const TH = styled('th')`
  font-size: ${fontSizes.kilo};
  line-height: ${lineHeights.kilo};
`;

const GuidelineTable: React.FC<GuidelineTableProps> = ({ title, children }) => (
  <ResponsiveTableWrapper>
    <Table>
      <thead>
        <tr>
          <TH>{title}</TH>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
    </Table>
  </ResponsiveTableWrapper>
);

export default GuidelineTable;

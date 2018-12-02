import React from 'react';

import { Table, ResponsiveTableWrapper } from '../docs/MarkdownComponents';

interface GuidelineTableProps {
  title: string;
}

const GuidelineTable: React.FC<GuidelineTableProps> = ({ title, children }) => (
  <ResponsiveTableWrapper>
    <Table>
      <thead>
        <tr>
          <th>{title}</th>
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

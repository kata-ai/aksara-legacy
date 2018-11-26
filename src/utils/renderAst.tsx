import React from 'react';
import rehypeReact from 'rehype-react';

import * as MarkdownComponents from 'components/docs/MarkdownComponents';
import MarkdownRow from 'components/docs/MarkdownRow';
import Col from 'components/layout/Col';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: (props: any) => <MarkdownComponents.H1 {...props} />,
    h2: (props: any) => <MarkdownComponents.H2 {...props} />,
    h3: (props: any) => <MarkdownComponents.H3 {...props} />,
    h4: (props: any) => <MarkdownComponents.H4 {...props} />,
    h5: (props: any) => <MarkdownComponents.H5 {...props} />,
    h6: (props: any) => <MarkdownComponents.H5 as="h6" {...props} />,
    p: (props: any) => <MarkdownComponents.P {...props} />,
    table: (props: any) => <MarkdownComponents.Table {...props} />,
    'text-primary': MarkdownComponents.TextPrimary,
    'md-row': MarkdownRow,
    'md-col': Col
  }
}).Compiler;

export default renderAst;

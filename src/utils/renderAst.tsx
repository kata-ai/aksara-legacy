import React from 'react';
import rehypeReact from 'rehype-react';
import Row from 'components/layout/Row';
import Col from 'components/layout/Col';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'md-row': Row,
    'md-col': Col
  }
}).Compiler;

export default renderAst;

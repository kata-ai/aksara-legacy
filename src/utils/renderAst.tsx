import React from 'react';
import rehypeReact from 'rehype-react';

import * as MarkdownComponents from 'components/docs/MarkdownComponents';
import MarkdownRow from 'components/docs/MarkdownRow';
import Col from 'components/layout/Col';
import ColorSwatchGrid from 'components/foundations/ColorSwatchGrid';
import ColorSwatch from 'components/foundations/ColorSwatch';
import FontStack from 'components/foundations/FontStack';
import TypographyTable from 'components/foundations/TypographyTable';
import SpacingDemo from 'components/foundations/SpacingDemo';

const renderAst = (isDocs?: boolean) =>
  new rehypeReact({
    createElement: React.createElement,
    components: {
      h1: (props: any) => <MarkdownComponents.H1 {...props} />,
      h2: (props: any) => <MarkdownComponents.H2 {...props} />,
      h3: (props: any) => <MarkdownComponents.H3 {...props} />,
      h4: (props: any) => <MarkdownComponents.H4 {...props} />,
      h5: (props: any) => <MarkdownComponents.H5 {...props} />,
      h6: (props: any) => <MarkdownComponents.H5 as="h6" {...props} />,
      p: (props: any) => <MarkdownComponents.P isDocs={isDocs} {...props} />,
      ul: (props: any) => <MarkdownComponents.UnorderedList isDocs={isDocs} {...props} />,
      ol: (props: any) => <MarkdownComponents.OrderedList isDocs={isDocs} {...props} />,
      table: (props: any) => <MarkdownComponents.Table {...props} />,
      'text-primary': MarkdownComponents.TextPrimary,
      'md-row': MarkdownRow,
      'md-col': Col,
      'md-responsive-table': MarkdownComponents.ResponsiveTableWrapper,
      'foundation-color-swatch-grid': ColorSwatchGrid,
      'foundation-color-swatch': ColorSwatch,
      'foundation-font-stack': FontStack,
      'foundation-typography-table': TypographyTable,
      'foundation-spacing-demo': SpacingDemo
    }
  }).Compiler;

export default renderAst;

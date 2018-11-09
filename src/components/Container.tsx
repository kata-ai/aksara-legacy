import styled from 'utils/styled';

import { widths } from 'styles/variables';

interface ContainerProps {
  medium?: boolean;
  large?: boolean;
  extralarge?: boolean;
}

const Container = styled<ContainerProps, 'div'>('div')`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  ${props => props.medium ? `max-width: ${widths.md}px` : ``};
  ${props => props.large ? `max-width: ${widths.lg}px` : ``};
  ${props => props.extralarge ? `max-width: ${widths.xl}px` : ``};
`;

export default Container;

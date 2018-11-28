import styled from 'utils/styled';
import { colors } from 'styles/variables';

interface SpacingDemoProps {
  size: number;
}

const SpacingDemo = styled<SpacingDemoProps, 'div'>('div')`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${colors.kata01};
  border: 1px solid ${colors.kata02};
`;

export default SpacingDemo;

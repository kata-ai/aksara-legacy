import styled from 'utils/styled';
import { breakpoints } from 'styles/variables';

interface RowProps {
  centered?: boolean;
}

const Row = styled<RowProps, 'div'>('div')`
  display: flex;
  flex-direction: column;
  margin-left: -15px;
  margin-right: -15px;

  @media (min-width: ${breakpoints.lg}px) {
    flex-direction: row;
    ${props => props.centered && `justify-content: center;`}
  }
`;

export default Row;

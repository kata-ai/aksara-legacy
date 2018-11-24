import styled from 'utils/styled';
import { breakpoints } from 'styles/variables';

const Row = styled('div')`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.lg}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Row;

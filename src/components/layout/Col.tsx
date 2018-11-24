import styled from 'utils/styled';
import { breakpoints } from 'styles/variables';

const Col = styled('div')`
  margin-left: 15px;
  margin-right: 15px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    flex: 0 1 calc(33.3%);
  }
`;

export default Col;

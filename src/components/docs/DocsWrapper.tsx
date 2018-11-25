import styled from 'utils/styled';
import { breakpoints } from 'styles/variables';

const DocsWrapper = styled('article')`
  display: block;
  flex: 1 1 auto;
  position: relative;
  padding: 48px ${props => props.theme.dimensions.containerPadding.mobile} 80px;

  @media (min-width: ${breakpoints.md}) {
    padding: 48px ${props => props.theme.dimensions.containerPadding.tablet} 80px;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 48px ${props => props.theme.dimensions.containerPadding.desktop} 80px;
  }
`;

export default DocsWrapper;

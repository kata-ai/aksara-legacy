import styled from 'utils/styled';

const DocsWrapper = styled('article')`
  display: block;
  flex: 1 1 auto;
  position: relative;
  padding: ${props => props.theme.dimensions.containerPadding.mobile};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.dimensions.containerPadding.tablet};
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: ${props => props.theme.dimensions.containerPadding.desktop};
  }

  padding-bottom: 3rem;
`;

export default DocsWrapper;

import styled from 'utils/styled';

const DocsHeader = styled('header')`
  margin-bottom: 48px;

  h1 {
    margin: 0;
    font-weight: 500;
    font-size: ${props => props.theme.dimensions.headingSizes.h1}rem;
    color: ${props => props.theme.colors.ink};
    line-height: ${props => props.theme.dimensions.lineHeight.heading};
  }
`;

export default DocsHeader;

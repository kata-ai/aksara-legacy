import styled, { css, Theme } from 'utils/styled';
import { ThemedStyledProps } from 'styled-components';

interface GeometricShapesProps {
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
}

const TopLeft = (props: ThemedStyledProps<GeometricShapesProps, Theme>) => css`
  top: -119px;
  left: ${props.theme.dimensions.containerPadding.mobile};
`;

const GeometricShapes = styled<GeometricShapesProps, 'img'>('img')`
  position: absolute;
  z-index: 1;
  user-select: none;

  ${props => props.topLeft && TopLeft(props)}
`;

export default GeometricShapes;

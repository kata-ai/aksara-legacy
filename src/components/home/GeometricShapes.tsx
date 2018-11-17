import styled, { css, Theme } from 'utils/styled';
import { ThemedStyledProps } from 'styled-components';

interface GeometricShapesProps {
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
}

const TopLeft = (props: ThemedStyledProps<GeometricShapesProps, Theme>) => css`
  display: block;
  top: -119px;
  left: ${props.theme.dimensions.containerPadding.mobile};

  @media (min-width: ${props.theme.breakpoints.md}px) {
    top: -52px;
    left: ${props.theme.dimensions.containerPadding.tablet};
  }

  @media (min-width: ${props.theme.breakpoints.xl}px) {
    left: ${props.theme.dimensions.containerPadding.desktop};
  }
`;

const TopRight = (props: ThemedStyledProps<GeometricShapesProps, Theme>) => css`
  @media (min-width: ${props.theme.breakpoints.lg}px) {
    display: block;
    top: -80px;
    right: ${props.theme.dimensions.containerPadding.tablet};
  }
`;

const BottomLeft = (props: ThemedStyledProps<GeometricShapesProps, Theme>) => css`
  @media (min-width: ${props.theme.breakpoints.lg}px) {
    display: block;
    bottom: -46px;
    left: ${props.theme.dimensions.containerPadding.tablet};
  }

  @media (min-width: ${props.theme.breakpoints.xl}px) {
    bottom: -66px;
    left: ${props.theme.dimensions.containerPadding.desktop};
  }
`;

const BottomRight = (props: ThemedStyledProps<GeometricShapesProps, Theme>) => css`
  display: block;
  bottom: -104px;
  right: ${props.theme.dimensions.containerPadding.mobile};

  @media (min-width: ${props.theme.breakpoints.md}px) {
    bottom: -60px;
    right: ${props.theme.dimensions.containerPadding.tablet};
  }

  @media (min-width: ${props.theme.breakpoints.lg}px) {
    bottom: -28px;
  }

  @media (min-width: ${props.theme.breakpoints.xl}px) {
    bottom: -48px;
    right: ${props.theme.dimensions.containerPadding.desktop};
  }
`;

const GeometricShapes = styled<GeometricShapesProps, 'img'>('img')`
  display: none;
  position: absolute;
  z-index: 1;
  user-select: none;

  ${props => props.topLeft && TopLeft(props)}
  ${props => props.topRight && TopRight(props)}
  ${props => props.bottomLeft && BottomLeft(props)}
  ${props => props.bottomRight && BottomRight(props)}
`;

export default GeometricShapes;

import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

interface ColorSwatchProps {
  className?: string;
  hexcode: string;
  name?: string;
}

const ColorSwatch: React.SFC<ColorSwatchProps> = ({ hexcode, name, className }) => (
  <Root hexcode={hexcode} className={className}>
    <Swatch hexcode={hexcode}>
      <Color hexcode={hexcode} />
      <Span>{hexcode}</Span>
    </Swatch>
    <Name>{name}</Name>
  </Root>
);

export default ColorSwatch;

const Swatch = styled<ColorSwatchProps, 'div'>('div')`
  padding: 10px;
  background-color: ${colors.neutral01};
  color: ${colors.neutral08};
  border: 1px solid ${colors.neutral04};
  border-radius: 4px;
  font-size: 12px;
  line-height: 1;
  text-align: center;
`;

const Span = styled('span')`
  display: block;
  margin-top: 11px;
  margin-bottom: 0;
`;

const Color = styled<ColorSwatchProps, 'div'>('div')`
  width: 100%;
  height: 110px;
  background-color: ${props => props.hexcode};
  border-radius: 2px;

  ${Span} {
    font-size: 12px;
  }
`;

const Name = styled('p')`
  display: block;
  margin-top: 11px;
  margin-bottom: 0;
`;

const Root = styled<ColorSwatchProps, 'div'>('div')`
  flex: 0 0 130px;
  margin: 0px 15px 40px;

  ${Name} {
    color: ${colors.neutral06};
  }
`;

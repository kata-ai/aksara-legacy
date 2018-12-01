import * as React from 'react';
import styled from 'styled-components';
import { colors, fontSizes, lineHeights } from 'styles/variables';

interface ColorGradientSwatch {
  className?: string;
  gradient: string;
  gradientColors: string[];
  name?: string;
  colorkey?: string;
}

const ColorGradientSwatch: React.SFC<ColorGradientSwatch> = ({
  gradient,
  name,
  gradientColors,
  colorkey,
  className
}) => (
  <Root gradient={gradient} className={className} gradientColors={gradientColors}>
    <Swatch gradientColors={gradientColors} gradient={gradient}>
      <Color gradientColors={gradientColors} gradient={gradient} />
      {gradientColors && (
        <Effects>
          {gradientColors.map((color, i, arr) => {
            if (arr.length - 1 === i) {
              return (
                <React.Fragment key={color}>
                  <Span>{color}</Span>
                </React.Fragment>
              );
            }

            return (
              <React.Fragment key={color}>
                <Span>{color}</Span>
                <Span arrow>&rarr;</Span>
              </React.Fragment>
            );
          })}
        </Effects>
      )}
    </Swatch>
    {(name || colorkey) && (
      <BottomText>
        {colorkey && <ColorKey>{colorkey}</ColorKey>}
        {name && <Name>{name}</Name>}
      </BottomText>
    )}
  </Root>
);

export default ColorGradientSwatch;

const Swatch = styled<ColorGradientSwatch, 'div'>('div')`
  padding: 10px;
  background-color: ${colors.neutral01};
  color: ${colors.neutral08};
  border: 1px solid ${colors.neutral04};
  border-radius: 4px;
  font-size: 12px;
  line-height: 1;
  text-align: center;
`;

const Span = styled<{ arrow?: boolean }, 'span'>('span')`
  font-size: ${fontSizes.deka};
  line-height: ${lineHeights.deka};
  font-weight: 300;
  color: ${props => (props.arrow ? colors.neutral06 : colors.neutral08)};
`;

const Effects = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 11px;
  margin-bottom: 0;
`;

const Color = styled<ColorGradientSwatch, 'div'>('div')`
  width: 100%;
  height: 64px;
  background-image: ${props => props.gradient};
  border-radius: 2px;

  ${Effects} {
    font-size: ${fontSizes.hecto};
    line-height: ${lineHeights.hecto};
    font-weight: 300;
  }
`;

const BottomText = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 11px;
  margin-bottom: 0;
`;

const ColorKey = styled('p')`
  margin: 0;
  font-size: ${fontSizes.deka};
  line-height: ${lineHeights.deka};
  color: ${colors.neutral08};
  font-weight: 700;
`;

const Name = styled('p')`
  margin: 0;
  font-size: ${fontSizes.hecto};
  line-height: ${lineHeights.hecto};
  color: ${colors.neutral06};
  font-weight: 700;
  text-transform: uppercase;
`;

const Root = styled<ColorGradientSwatch, 'div'>('div')`
  flex: 1 0 auto;
  margin: 0px 15px 24px;
`;

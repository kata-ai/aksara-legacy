import React from 'react';
import styled, { css } from 'utils/styled';
import { brandColors } from 'styles/variables';

interface Props {
  image?: string;
  title?: string;
  subtitle?: string;
  white?: boolean;
  grey?: boolean;
  isHomepage?: boolean;
}

interface State {}

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { isHomepage, grey } = this.props;

    return (
      <Wrapper isHomepage={isHomepage} grey={grey}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, delectus! Ea officia
        perspiciatis dolorem nesciunt eius eveniet nisi expedita deleniti, nemo blanditiis ad hic ab
        autem incidunt ipsa aliquam cupiditate?
      </Wrapper>
    );
  }
}

const HomepageCard = css`
  height: 232px;
  z-index: 1;
`;

const Wrapper = styled<Props, 'div'>('div')`
  padding: 30px 40px 40px 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  background-color: ${props => (props.grey ? brandColors.grey10 : brandColors.white)};
  box-shadow: ${props => (props.grey ? 'none' : '0 1px 2px 0 rgba(0, 0, 0, 0.25)')};

  ${props => props.isHomepage && HomepageCard}
`;

export default Card;

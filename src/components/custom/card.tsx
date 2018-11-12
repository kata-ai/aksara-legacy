import React from 'react';
import styled from 'utils/styled';

interface Props {
  image?: string;
  title?: string;
  subtitle?: string;
  white?: boolean;
  grey?: boolean;
}

interface State {

}

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Numquam, delectus! Ea officia perspiciatis dolorem nesciunt eius eveniet nisi
        expedita deleniti, nemo blanditiis ad hic ab autem incidunt ipsa aliquam cupiditate?
      </Wrapper>
    );
  }
}

const Wrapper = styled('div')`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  padding: 30px 40px 40px 40px;
`;

export default Card;

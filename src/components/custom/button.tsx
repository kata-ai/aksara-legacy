import React from 'react';
import Link from 'gatsby-link';
import styled from 'utils/styled';

interface Props {
  primary?: boolean;
  link?: boolean;
  text: string;
  to: string;
}

interface State {
  activeMenuKey?: string;
}

class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeMenuKey: ''
    };
  }

  render() {
    const { primary, link, text } = this.props;
    if (primary) {
      return (
        <Primary to="/">{text}</Primary>
      );
    } else if (link) {
      return (
        <Primary to="/">{text}</Primary>
      );
    }
  }
}

const Primary = styled(Link)`
  padding: 15px 16px 15px 16px;
  border-radius: 4px;
  font-family: 'MuseoSansRounded-700';
  font-size: ${props => props.theme.dimensions.fontSize.medium}px;
  background-color: ${props => props.theme.colors.accentDark};
  color: ${props => props.theme.colors.white};
  &:hover,
  &:focus {
    outline: none;
    text-decoration: none;
  }
`;

export default Button;

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
    const { primary, link, text, to } = this.props;
    if (primary) {
      return <Primary to={to}>{text}</Primary>;
    }

    if (link) {
      return <Primary to={to}>{text}</Primary>;
    }
  }
}

const Primary = styled(Link)`
  padding: 18px 35px 18px 35px;
  border-radius: 4px;
  font-weight: 700;
  font-size: ${props => props.theme.dimensions.fontSize.medium}px;
  background-color: ${props => props.theme.colors.accentDark};
  color: ${props => props.theme.colors.white};
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  &:hover,
  &:focus {
    outline: none;
    text-decoration: none;
  }
  &:hover {
    background-color: ${props => props.theme.colors.cobalt01};
  }
  &:focus {
    background-color: ${props => props.theme.colors.cobalt03};
  }
`;

export default Button;

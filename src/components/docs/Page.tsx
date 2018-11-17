import styled, { css, Theme } from 'utils/styled';
import { ThemedStyledProps } from 'styled-components';

interface PageProps {
  docsPage?: boolean;
  updatesPage?: boolean;
}

const UpdatesPage = (props: ThemedStyledProps<PageProps, Theme>) => css`
  background-color: ${props.theme.colors.ui.whisper};
`;

const Page = styled<PageProps, 'main'>('main')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  padding: 0;
  ${props => (props.updatesPage || props.docsPage ? UpdatesPage(props) : null)}
`;

export default Page;

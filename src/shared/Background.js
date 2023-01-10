import styled from 'styled-components';

export default function Background({ children, backgroundColor }) {
  return <BackgroundStyle backgroundColor={backgroundColor}>{children}</BackgroundStyle>;
}
const BackgroundStyle = styled.main`
  background-color: ${props => props.backgroundColor};

  width: 100%;
  height: 100%;
`;

import styled from 'styled-components';

export default function ButtonOnlyWords({ children }) {
  return <ButtonOnlyWordsStyle>{children}</ButtonOnlyWordsStyle>;
}

const ButtonOnlyWordsStyle = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  margin: 36px;
  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-shadow: 0.1em 0.05em 0em transparent;
  margin-top: 15px;
  :hover {
    cursor: pointer;
  }
`;

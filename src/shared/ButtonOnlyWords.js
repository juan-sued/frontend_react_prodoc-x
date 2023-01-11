import styled from 'styled-components';

export default function ButtonOnlyWords({ children }) {
  return <ButtonOnlyWordsStyle>{children}</ButtonOnlyWordsStyle>;
}

const ButtonOnlyWordsStyle = styled.button`
  border: none;
  color: #0009;
  margin-bottom: 30px;
  width: 100%;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14.5px;

  margin-top: 15px;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;

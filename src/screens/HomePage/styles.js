import styled from 'styled-components';

export const ContainerImg = styled.div`
  width: 100%;
  max-height: 400px;
  margin-bottom: 10px;
  position: absolute;
  z-index: 0;
  right: 0;
  top: 0px;
  margin-bottom: 0;

  img {
    width: 100%;
  }
`;

export const ContainerFormClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 413px) {
    margin-top: 30px;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
  }
`;

export const InputClass = styled.input`
  font-size: 20px;
  width: 100%;
  height: 50px;

  border: 1px solid #d4d4d4;
  font-family: 'Poppins', sans-serif;
  border-radius: 4px;
  padding-left: 10px;
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  color: #000000;
  ::placeholder {
    color: #0004;
  }
`;

import Main from '../../shared/Main';

import ButtonOnlyWords from '../../shared/ButtonOnlyWords.js';

import { Link } from 'react-router-dom';

import SingInForm from './SingInForm';
import styled from 'styled-components';

export default function HomePage() {
  return (
    <HomePageStyle>
      <Main margin_top={'60'}>
        <div className="titleContainer">
          <h1>Prodoc-X</h1>
        </div>
        <SingInForm />
        <Link to="/sign-up">
          <ButtonOnlyWords>Não possui cadastro? Clique aqui!</ButtonOnlyWords>
        </Link>
      </Main>
    </HomePageStyle>
  );
}

const HomePageStyle = styled.div`
  width: 100%;
  height: 700px;
  background-color: #009c31;
  background-image: linear-gradient(
    170deg,
    #009c31 31%,
    #ffffff 31.7%,
    #ffffff 68.5%,
    #ff4040 69%
  );

  .titleContainer {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-weight: 500;
      font-family: sans-serif;
      font-size: 40px;
    }
  }
`;

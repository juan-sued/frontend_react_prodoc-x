import Main from '../../shared/Main';

import ButtonOnlyWords from '../../shared/ButtonOnlyWords.js';

import { Link } from 'react-router-dom';

import SingInForm from './SingInForm';
import styled from 'styled-components';
import Footer from '../../shared/Footer';

import venezabackground from '../../assets/venezabackground.jpg';
import { ContainerImg } from './styles';

export default function HomePage() {
  return (
    <>
      <ContainerImg>
        <img src={venezabackground} alt="" />
      </ContainerImg>
      <HomePageStyle>
        <header className="header">
          <div className="titleContainer">
            <ol className="listMenu">
              <li>Item menu</li>
              <li>item menu</li>
              <li>item menu</li>
            </ol>
          </div>
        </header>

        <Main margin_top={'200'}>
          <CardGeneric>
            <div className="containerTitleCard">
              <h1>LOGIN</h1>
            </div>
            <SingInForm />
            <Link to="/sign-up">
              <ButtonOnlyWords>Não possui cadastro? Clique aqui!</ButtonOnlyWords>
            </Link>
          </CardGeneric>
        </Main>
        <Footer title={'Prodoc'}> asdas</Footer>
      </HomePageStyle>
    </>
  );
}

const HomePageStyle = styled.div`
  width: 100%;
  background-color: white;

  header {
    position: absolute;
    z-index: 1;

    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */

    width: 100%;
    top: 0;

    .titleContainer {
      width: 100%;
      max-height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        font-weight: 500;
        font-family: sans-serif;
        font-size: 40px;
        color: white;
      }
    }

    .titleContainer {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      .listMenu {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;

        li {
          font-weight: 500;
          font-family: sans-serif;
          font-size: 25px;
          color: white;
        }
      }
    }
  }
`;

const CardGeneric = styled.div`
  background-color: white;

  border-radius: 4px;
  width: 200px;
  height: 100px;
  padding: 20px;
  background-color: transparent;
  transition: all 1s;
  overflow: hidden;

  .containerTitleCard {
    h1 {
      color: white;
    }
  }

  border: 1px solid white;

  :hover {
    .containerTitleCard {
      h1 {
        color: white;
      }
    }
    cursor: pointer;
    border-radius: 20px;
    color: black;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    width: 700px;
    height: 400px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }
  .containerTitleCard {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    margin-top: 15px;
    h1 {
      font-size: 30px;
    }
  }
`;

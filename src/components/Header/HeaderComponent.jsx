import React from "react";
import { Link } from "react-router-dom";
import LogoStarlineBlue from "../../assets/logoStarlineBlue.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./headerStyles.css";
const HeaderComponent = () => {
  return (
    <div className="full-header">
      <header className="first-header row col-lg-8">
        <div className="col-lg-3 col-sm-3 d-flex align-items-center justify-content-center col-12">
          <Link to="/">
            <img className="logo-image" src={LogoStarlineBlue} />
          </Link>
        </div>
        <div className="row col-lg-4">
          <div className="col-xxl-12 col-xl-11 col-lg-10 col-md-8 d-flex flex-row justify-content-center align-items-center col-11">
            <div className="col-lg-1 header-mini-icon header-big-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Menu / Hamburger_MD">
                  <path
                    id="Vector"
                    d="M5 17H19M5 12H19M5 7H19"
                    stroke="#1e3c64"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="input-container col-lg-8 col-12 header-mini-input">
              <div className="col-lg-6 col-3 col-sm-1"></div>
              <input
                type="text"
                placeholder="O que você procura?"
                className="search-input loupe-input col-lg-12 col-8"
              ></input>
            </div>
          </div>
        </div>
        <div className="signIn signIn-mini signIn-big col-xl-2 col-lg-2">
          <svg
            className="signIn-icon"
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19C15 15.134 11.866 12 8 12C4.13401 12 1 15.134 1 19M8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5C12 7.20914 10.2091 9 8 9Z"
              stroke="#1e3c64"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="signIn-text">
            <Link className="signIn-text" to="/entrar">
              Entrar/Cadastre-se
            </Link>
          </div>
        </div>
        <div className="cart cart-mini col-lg-2">
          <svg
            className="cart-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Interface / Shopping_Cart_02">
              <path
                id="Vector"
                d="M3 3H3.26835C3.74213 3 3.97943 3 4.17267 3.08548C4.34304 3.16084 4.48871 3.28218 4.59375 3.43604C4.71269 3.61026 4.75564 3.8429 4.84137 4.30727L7.00004 16L17.4218 16C17.875 16 18.1023 16 18.29 15.9199C18.4559 15.8492 18.5989 15.7346 18.7051 15.5889C18.8252 15.4242 18.8761 15.2037 18.9777 14.7631L18.9785 14.76L20.5477 7.95996L20.5481 7.95854C20.7023 7.29016 20.7796 6.95515 20.6947 6.69238C20.6202 6.46182 20.4635 6.26634 20.2556 6.14192C20.0184 6 19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z"
                stroke="#1e3c64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <div className="cart-text">
            <Link className="cart-text" to="/carrinho">
              Carrinho
            </Link>
          </div>
        </div>
      </header>
      <div className="second-header d-none d-sm-block row g-3">
        <div className="col-xxl-9 col-lg-9 col-sm-8">
          <ul className="second-header-text">
            <div className="col-lg-3"></div>

            <li className="second-text col-xxl-2 col-xl-2 col-lg-2 col-12">
              <Link className="second-text" to={`/search/futebol`}>
                Futebol
              </Link>
            </li>

            <li className="second-text col-xxl-2 col-xl-2 col-lg-2 col-12">
              <Link className="second-text" to={`/search/basquete`}>
                Basquete
              </Link>
            </li>
            <li className="second-text col-xxl-2 col-xl-2 col-lg-2 col-12">
              <Link className="second-text" to={`/search/f1`}>
                Formula 1
              </Link>
            </li>
            <li className="second-text col-xxl-2 col-xl-2 col-lg-2 col-12">
              <Link className="second-text" to={`/search/nfl`}>
                Roupas
              </Link>
            </li>
            <li className="second-text col-xxl-2 col-xl-2 col-lg-2 col-12">
              <Link className="second-text" to={`/search/acessorios`}>
                Acessórios
              </Link>
            </li>
            <li className="second-text col-xxl-2 col-xl-2 col-lg-2 col-12">
              <Link className="second-text" to={`/search/bolas`}>
                Bolas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

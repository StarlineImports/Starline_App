import React from "react";
import { Link } from "react-router-dom";
import MaskedInput from "react-input-mask";
import { useState } from "react";
import LogoStarlineBlue from "../../../assets/logoStarlineBlue.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registerComponent1.css";

const RegisterComponent1 = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [repetPassword, setRepetPassword] = useState("");

  const handleRepetPasswordChange = (event) => {
    setRepetPassword(event.target.value);
  };

  return (
    <div>
      <form className="row full-signIn-container">
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label className="col-lg-2"></label>
          <Link to="/">
            <img className="register-image" src={LogoStarlineBlue} />
          </Link>
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputName" className="form-label">
            Nome Completo
          </label>
          <input type="text" className="form-control" id="inputEmail" />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" id="inputEmail" />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputEmail" className="form-label">
            CPF
          </label>
          <MaskedInput
            mask="999.999.999-99"
            type="text"
            className="form-control"
            id="inputEmail"
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputSenha" className="form-label">
            Senha
          </label>
          <input
            type="password"
            value={password.replace(/./g, "*")}
            onChange={handlePasswordChange}
            className="form-control"
            id="inputPassword"
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputSenha" className="form-label">
            Repetir Senha
          </label>
          <input
            type="password"
            value={repetPassword.replace(/./g, "*")}
            onChange={handleRepetPasswordChange}
            className="form-control"
            id="inputPassword"
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <button
            type="text"
            className="form-control button"
            id="inputPassword"
          >
            Cria
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent1;

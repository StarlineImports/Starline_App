import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaskedInput from "react-input-mask";
import axios from "axios";
import LogoStarlineBlue from "../../../assets/logoStarlineBlue.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registerComponent1.css";

const RegisterComponent1 = () => {
  const [repetPassword, setRepetPassword] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    phone_ddd: "",
    status: 1,
    id_user_type: 1,
    cpf: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepetPasswordChange = (event) => {
    setRepetPassword(event.target.value);
  };

  return (
    <div>
      <form className="row full-signIn-container" onSubmit={handleSubmit}>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label className="col-lg-2"></label>
          <Link to="/">
            <img className="register-image" src={LogoStarlineBlue} alt="Logo" />
          </Link>
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputName" className="form-label">
            Nome Completo
          </label>
          <input
            type="text"
            className="form-control signIn-input"
            id="inputName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control signIn-input"
            id="inputEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputCPF" className="form-label">
            CPF
          </label>
          <MaskedInput
            mask="999.999.999-99"
            type="text"
            className="form-control signIn-input"
            id="inputCPF"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputTel" className="form-label">
            Telefone
          </label>
          <MaskedInput
            mask="(99) 99999-9999"
            type="text"
            className="form-control signIn-input"
            id="inputTel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputPassword" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control signIn-input"
            id="inputPassword"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputRepetPassword" className="form-label">
            Repetir Senha
          </label>
          <input
            type="password"
            className="form-control signIn-input"
            id="inputRepetPassword"
            name="repetPassword"
            value={repetPassword}
            onChange={handleRepetPasswordChange}
            required
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <button type="submit" className="form-control button">
            Criar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent1;

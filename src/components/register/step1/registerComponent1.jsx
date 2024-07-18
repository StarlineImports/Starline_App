import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MaskedInput from "react-input-mask";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";
import { fireDB, auth } from "../../../firebase";
import LogoStarlineBlue from "../../../assets/logoStarlineblue.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registerComponent1.css";

const RegisterComponent1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    cpf: "",
    image: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, senha, confirmarSenha, telefone, cpf, image } =
      formData;
    const tipo = 1;

    if (
      !displayName ||
      !email ||
      !senha ||
      !confirmarSenha ||
      !telefone ||
      !cpf
    ) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName });

      const userDocRef = doc(fireDB, "usuarios", user.uid);
      await setDoc(userDocRef, {
        displayName,
        email,
        telefone,
        cpf,
        tipo,
        image,
      });

      toast.success("Registro realizado com sucesso");
      navigate("/entrar");
    } catch (error) {
      console.error("Erro de registro:", error.message);
      alert("Falha no registro. Tente novamente.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordChange = (event) => {
    setFormData({ ...formData, senha: event.target.value });
  };

  const handleRepetPasswordChange = (event) => {
    setFormData({ ...formData, confirmarSenha: event.target.value });
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
            id="inputdisplayName"
            name="displayName"
            value={formData.displayName}
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
            name="telefone"
            value={formData.telefone}
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
            name="senha"
            value={formData.senha}
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
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleRepetPasswordChange}
            required
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <button
            type="submit"
            className="form-control button"
            onClick={handleSubmit}
          >
            Criar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent1;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import LogoStarlineBlue from "../../assets/logoStarlineBlue.png";
import Loader from "../../components/loader/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signInComponent.css";
import myContext from "../../context/myContext";

const SignInComponent = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const userLoginFunction = async () => {
    // validation
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") {
            navigate("/user-dashboard");
          } else {
            navigate("/admin-dashboard");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate("/");
      alert("Logado com sucesso!");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div>
      <form className="row full-signIn-container">
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label className="col-lg-2"></label>
          <Link to="/">
            <img className="signIn-image" src={LogoStarlineBlue} />
          </Link>
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control signIn-input"
            id="inputEmail"
            value={userLogin.email}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputSenha" className="form-label">
            Senha
          </label>
          <input
            type="password"
            value={userLogin.password}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                password: e.target.value,
              });
            }}
            className="form-control signIn-input"
            id="inputPassword"
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <button
            className="form-control button"
            id="submitButton"
            onClick={userLoginFunction}
          >
            {!loading && <p className="textButton">Entrar</p>}{" "}
            {loading && <Loader />}
          </button>
          <Link to="/">
            <label className="forgot">Esqueceu sua senha?</label>
          </Link>
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <button
            type="button"
            className="form-control google-button"
            id="signInWithGoogleButton"
            onClick={signInWithGoogle}
          >
            <svg
              className="google-icon"
              width="28"
              height="28"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_539_41)">
                <path
                  d="M30.6978 15.8571C30.6978 14.8034 30.6124 13.7441 30.4302 12.7075H15.8101V18.6763H24.1823C23.8349 20.6013 22.7186 22.3042 21.084 23.3864V27.2592H26.0789C29.012 24.5596 30.6978 20.5729 30.6978 15.8571Z"
                  fill="#4285F4"
                />
                <path
                  d="M15.8099 31.001C19.9903 31.001 23.5158 29.6285 26.0844 27.2592L21.0896 23.3863C19.6999 24.3317 17.9058 24.8671 15.8156 24.8671C11.7719 24.8671 8.34327 22.139 7.11307 18.4712H1.95874V22.4637C4.59001 27.6977 9.94937 31.001 15.8099 31.001V31.001Z"
                  fill="#34A853"
                />
                <path
                  d="M7.10751 18.4712C6.45823 16.5462 6.45823 14.4617 7.10751 12.5367V8.54419H1.95887C-0.239546 12.9239 -0.239546 18.084 1.95887 22.4637L7.10751 18.4712V18.4712Z"
                  fill="#FBBC04"
                />
                <path
                  d="M15.8099 6.13498C18.0197 6.10081 20.1555 6.93233 21.7559 8.4587L26.1812 4.03338C23.3791 1.40211 19.66 -0.0445186 15.8099 0.00104453C9.94937 0.00104453 4.59001 3.30437 1.95874 8.54413L7.10737 12.5366C8.33188 8.86307 11.7662 6.13498 15.8099 6.13498V6.13498Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_539_41">
                  <rect width="31" height="31" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Entrar com Google
          </button>
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12 centered">
          <Link to="/cadastrar" className="register-text">
            <h5>Não tem conta? Cadastre-se</h5>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;

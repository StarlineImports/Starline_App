import React from "react";
import { Link } from "react-router-dom";
import LogoBigWhite from "../../../assets/logoBigWhite.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignInHeaderStyles.css";
const SignInHeaderComponent = () => {
  return (
    <div className="header">
      <header className="first-header row">
        <div className="col-1"></div>
        <div className="col-1">
          <Link to="/">
            <img className="signInHeader-image" src={LogoBigWhite} />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default SignInHeaderComponent;

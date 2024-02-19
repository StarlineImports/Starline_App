import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import RegisterComponent1 from "../../components/register/step1/registerComponent1.jsx";

const RegisterFirstStep = () => {
  return (
    <div className="register-body">
      <div className="register-component">
        <RegisterComponent1 />
      </div>
    </div>
  );
};

export default RegisterFirstStep;

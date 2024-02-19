import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signIn.css";
import SignInComponent from "../../components/signIn/signInComponent";

const SignIn = () => {
  return (
    <div className="signIn-body">
      <div className="signIn-component">
        <SignInComponent />
      </div>
    </div>
  );
};

export default SignIn;

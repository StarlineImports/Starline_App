import "./perfilInfo.css";
import React from "react";

import User from "./user.png";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import MyVerticallyCenteredModal from  '../details/details.jsx'

const ProfileInfo = () => {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="profile-box">
        <div>
          <div className="profile-info">
            <div className="profile-info-box ">
              <div className="profile-info-content">
                <div>
                  <img src={User} className="profile-img" />
                </div>
                <div>
                  <h1 className="h1-profile">
                    Nome do Cliente <br /> <p>gustavomefazumpix@gmail.com</p>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-info-sald ">
          <div className="sald-text">
            <h1>Credito Disponível</h1>
            <h2>R$ 0,00</h2>
          </div>
          <div className="consult-sald">
          <Button variant="warning" className="consult-btn" onClick={() => setModalShow(true)}>VER DETALHES</Button>{' '}
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ProfileInfo;

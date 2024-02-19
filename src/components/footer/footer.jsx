import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoBigWhite from "../../assets/logoBigWhite.png";
import "./footer.css";

const Footer = () => {
  const TwitterLink = () => {
    window.open("https://twitter.com/StarlineImports", "_blank");
  };
  const InstagramLink = () => {
    window.open("https://twitter.com/StarlineImports", "_blank");
  };

  return (
    <div className="footer-body row">
      <img className="logo-footer" src={LogoBigWhite} />
      <div className="footer-text row col-12 col-md-9">
        <div className="help col-12 col-md-3">
          <div className="help-title">Precisa de Ajuda?</div>
          <div className="help-text">
            <div className="text">Entrar em contato</div>
            <div className="text">Rastrear seu pedido</div>
            <div className="text">Reembolso</div>
          </div>
        </div>
        <div className="company col-12 col-md-3">
          <div className="company-title">Quem somos?</div>
          <div className="company-text">
            <div className="text">Sobre nós</div>
            <div className="text">Colaboradores</div>
            <div className="text">Midias</div>
          </div>
        </div>
        <div className="more col-12 col-md-3">
          <div className="more-title">Mais Informações</div>
          <div className="more-text">
            <div className="text">Termos e Condições</div>
            <div className="text">Politica de Privacidade</div>
            <div className="text">Politica de Entregas</div>
          </div>
        </div>
        <div className="social-media col-12 col-md-2">
          <div className="social-media-title">Redes Sociais</div>
          <div className="social-media-text">
            <div className="text">Tiktok</div>
            <div className="text" onClick={InstagramLink}>
              Instagram
            </div>
            <div className="text" onClick={TwitterLink}>
              Twitter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

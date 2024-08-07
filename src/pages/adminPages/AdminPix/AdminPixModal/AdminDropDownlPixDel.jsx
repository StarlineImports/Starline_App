// Imports Bibliotecas
import React from 'react'

// Import CSS
import './AdminDropDownPixDel.css'

// Imports icons imgs e assets
import { MdShare, MdQrCode, MdDelete } from 'react-icons/md';

const AdminDropDownPixDel = ({ h4Text, spanText, isOpen }) => {
    if (!isOpen) return null;
  return (
      <div className="modal-pix-del-container">
          <div className="modal-pix-del-content">
              <h2>{h4Text}</h2>
              <div className="modal-info">
                  <h4>Chave: <span>{spanText}</span></h4>
              </div>
              <div className="modal-actions">
                  <button className="modal-btn share-btn">
                      <MdShare /> Compartilhar
                  </button>
                  <button className="modal-btn qr-code-btn">
                      <MdQrCode /> Gerar QR Code
                  </button>
                  <button className="modal-btn delete-btn">
                      <MdDelete /> Excluir
                  </button>
              </div>
          </div>
      </div>
  )
}

export default AdminDropDownPixDel

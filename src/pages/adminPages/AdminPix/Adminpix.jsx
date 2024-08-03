// Imports Bibliotecas 
import React from 'react'

// Import Css
import './AdminPix.css'

// Imports Icons imgs e assets
import LogoPix from '../../../assets/LogoPix.png'
import { MdQrCode, MdMoreVert, MdMarkunread, MdSmartphone, MdOutlineAdd } from "react-icons/md";
import { IoMdKeypad, IoIosKey } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";


const Adminpix = () => {
    return (
        <main className='container-pix-geral'>
            <div className="container-pix">
                <div className="Pix-Logo">
                    <img src={LogoPix} alt="Logo Pix" />
                    <div className="Pix-Text">
                        <p>Com PIX, você receberá suas transferências a qualquer hora do dia!</p>
                        <p>Cadastre agora mesmo sua chave Pix!</p>
                    </div>
                </div>
                <div className="pix-minhas-chaves-container">
                    <div className="pix-minhas-chaves">
                        <h2><IoIosKey /> Minhas Chaves</h2>
                        <MdOutlineAdd />
                    </div>
                    <div className="pix-info">
                        <div className="conatiner-pix-flex">
                            <RiSecurePaymentLine />
                            <h4>Chave aleatória</h4>
                            <div className="Pix-i-flex">
                                <MdMoreVert />
                            </div>
                        </div>
                        <span>4d6a7f8d-9e10-11e1-a9e2-3f4g5h6i7j8k</span>
                    </div>
                    <div className="pix-info">
                        <div className="conatiner-pix-flex">
                            <MdMarkunread />
                            <h4>E-mail</h4>
                            <div className="Pix-i-flex">
                                <MdMoreVert />
                            </div>
                        </div>
                        <span>fulanodetal@gmail.com</span>
                    </div>
                    <div className="pix-info">
                        <div className="conatiner-pix-flex">
                            <MdSmartphone />
                            <h4>Celular</h4>
                            <div className="Pix-i-flex">
                                <MdMoreVert />
                            </div>
                        </div>
                        <span>(98)-99884-3251</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Adminpix

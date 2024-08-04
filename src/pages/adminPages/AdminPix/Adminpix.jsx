// Imports Bibliotecas 
import React, { useEffect, useRef, useState } from 'react'

// Import Css
import './AdminPix.css'

// Imports Components
import AdminPixModalAdd from './AdminPixModal/AdminPixModalAdd';

// Imports Icons imgs e assets
import LogoPix from '../../../assets/LogoPix.png'
import { MdMoreVert, MdMarkunread, MdSmartphone, MdOutlineAdd } from "react-icons/md";
import { IoIosKey } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";


const Adminpix = () => {

    // Estado do dropdown icone
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
        setIsDropdownOpen(PrevState => !PrevState);
    }; // Alterna o estado de aberto/fechado do dropdown    

    // Fecha o dropdown ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

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
                        <div className="dropdown-container" ref={dropdownRef}>
                            <MdOutlineAdd onClick={toggleDropdown} />
                            <AdminPixModalAdd isOpen={isDropdownOpen} />
                        </div>
                    </div>
                    < AdminPixModalAdd />
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

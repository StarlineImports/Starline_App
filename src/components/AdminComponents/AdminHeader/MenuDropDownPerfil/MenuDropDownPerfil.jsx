// Imports Bibiotecas
import React from 'react'
import { useNavigate } from 'react-router-dom'

//Import CSS
import './MenuDropDownPerfil.css'

//Import icon, image
import { MdSettings, MdLogout, MdPix } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";


const MenuDropDownPerfil = ({ isDropdownOpen, setIsDropdownOpen }) => {

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        setIsDropdownOpen(false);
        navigate("/admin/adminPix");
    };

    return (
        <div className={`container-menu-dropdown ${isDropdownOpen ? 'Dropshow' : ''}`}>
            <nav className='menu-dropdown-nav'>
                <ul>
                    <li onClick={() => handleNavigate('#')}>
                        <FaUserEdit />
                        <span>Perfil</span>
                    </li>
                    <li onClick={() => handleNavigate('/admin/adminPix')}>
                        <MdPix />
                        <span>Pix</span>
                    </li>
                    <li onClick={() => handleNavigate('#')}>
                        <MdSettings />
                        <span>Configurações</span>
                    </li>
                    <hr />
                    <li onClick={() => handleNavigate('/')}>
                        <MdLogout />
                        <span>Sair</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuDropDownPerfil

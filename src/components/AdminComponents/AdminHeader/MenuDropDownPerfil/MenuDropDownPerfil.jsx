// Imports Bibiotecas
import React from 'react'
import { Link } from 'react-router-dom'

//Import CSS
import './MenuDropDownPerfil.css'

//Import icon, image
import { MdSettings, MdLogout, MdPix } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const MenuDropDownPerfil = ({isDropdownOpen}) => {
    return (
        <div className={`container-menu-dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <nav className='menu-dropdown-nav'>
                <ul>
                    <Link to="#">
                        <li>
                            <FaUserEdit />
                            <span>Perfil</span>
                        </li>
                    </Link>
                    <Link to="#">
                        <li>
                            <MdPix />
                            <span>Pix</span>
                        </li>
                    </Link>
                    <Link to="#">
                        <li>
                            <MdSettings />
                            <span>Configurações</span>
                        </li>
                    </Link>
                    <hr />
                    <Link to="#">
                        <li>
                            <MdLogout />
                            <span>Sair</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default MenuDropDownPerfil

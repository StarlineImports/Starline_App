// Import Bibliotecas
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';



// Import CSS
import "./AdminMenu.css";

// Import icon, image
import LogoAdmin from "../../../assets/logoBig.png";
import { MdSpaceDashboard } from "react-icons/md";
import {
    FaHome,
    FaWallet,
    FaChartLine,
    FaRegClock,
    FaCog,
    FaSignOutAlt,
    FaCanadianMapleLeaf
} from "react-icons/fa";

const AdminMenu = () => {

    useEffect(() => {
        const mainMenuLi = document.getElementById("mainMenu").querySelectorAll("li");

        function changeActive() { /* função para mudar a classe active */
            mainMenuLi.forEach(n => n.classList.remove("active")); /* removendo a classe active */
            this.classList.add("active"); /* adicionando a classe active */
        };
        mainMenuLi.forEach((n) => n.addEventListener("click", changeActive)); /* adicionando evento de click */
    }, []);


    return (
        <nav className="Menu-lateral">
            <Link to="/">
                <img src={LogoAdmin} alt="Logo da pagina" />
            </Link>

            <ul id="mainMenu">
                <Icon to="/" icon={<MdSpaceDashboard />} title="DashBoard" />
                <Icon to="#" icon={<FaRegClock />} title="Produtos" />
                <Icon to="#" icon={<FaChartLine />} title="Ordes List" />
               <Icon to="#" icon={<FaCanadianMapleLeaf />} title="Compras" />
                <Icon to="#" icon={<FaWallet />} title="Carteira" />
            </ul>
            <hr />
            <ul className="lasttMenu">
                <Icon to="#" icon={<FaCog />} title="Configurações" />
                <Icon to="#" icon={<FaSignOutAlt />} title="Sair"/>
            </ul>
        </nav>
    )
}

const Icon = ({ to, icon, title, onClick }) => ( // Icon component
    <li>
        <Link to={to} title={title} onClick={onClick} >
            {icon}
            <span className="icon-text">{title}</span>
        </Link>
    </li>
);

export default AdminMenu
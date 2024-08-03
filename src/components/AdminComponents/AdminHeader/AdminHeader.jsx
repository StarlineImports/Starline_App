// Import Bibliotecas
import React, { useState, useEffect } from "react";

// Import CSS
import "./AdminHeader.css";
import "../../../AdminGlobal.css";

// Imports Icons img e assets
import Perfil from "../../../assets/Ge.jpg";
import {
    MdOutlineSearch,
    MdNotifications,
    MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const AdminHeader = () => {
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("usuarios"));

    useEffect(() => {
        if (user.tipo === 2) {
            setIsLogged(true);
            setIsAdmin(true);
            setUserName(user.displayName);
            setUserImage(user.image);
        } else {
            navigate("/");
        }
    }, [user]);

    return (
        <header className="Header-painel">
            {/* <!-- Header Left --> */}
            <div className="search-bar">
                <i>
                    <MdOutlineSearch />
                </i>
                <input type="text" placeholder="Pesquisa" />
            </div>

            {/* <!-- Header Right --> */}
            <div className="header-right">
                <div className="notifications">
                    <i>
                        <MdNotifications />
                    </i>
                    <span className="notification-count">6</span>
                </div>

                <div className="profile">
                    <div className="perfill-name-img">
                        <img src={userImage} alt="User Profile" />
                        <span className="user-name">{userName.split(" ")[0]} </span>
                    </div>
                    <div className="pefill-adim-tipo">
                        <span className="user-type">Admin</span>
                    </div>
                </div>

                <div className="menu-dropdow">
                    <i>
                        <MdOutlineArrowDropDownCircle />
                    </i>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;

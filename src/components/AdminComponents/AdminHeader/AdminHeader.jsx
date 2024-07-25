// Import Bibliotecas
import React from "react";

// Import CSS
import "./AdminHeader.css";

// Imports Icons img e assets
import {
    MdOutlineSearch,
    MdNotifications,
    MdOutlineArrowDropDownCircle
} from "react-icons/md";

const AdminHeader = () => {
    return (
        <header>
            {/* <!-- Header Left --> */}
            <div className="search-bar">
                <i><MdOutlineSearch /></i>
                <input type="text" placeholder="Pesquisa" />
            </div>

            {/* <!-- Header Right --> */}
            <div className="header-right">
                <div className="notifications">
                    <i><MdNotifications /></i>
                    <span className="notification-count">6</span>
                </div>

                <div className="profile">
                    <div className="perfill-name-img">
                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="User Profile" />
                        <span className="user-name">Geilson Freire</span>
                    </div>
                    <div className="pefill-adim-tipo">
                        <span className="user-type">Admin</span>
                    </div>
                </div>

                <div className="menu-dropdow">
                    <i><MdOutlineArrowDropDownCircle /></i>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
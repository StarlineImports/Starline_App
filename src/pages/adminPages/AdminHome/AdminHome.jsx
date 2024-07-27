import React from 'react';
import { Outlet } from 'react-router-dom';

// Import CSS
import './AdminHome.css';


// Import Components
import AdminMenu from "../../../components/AdminComponents/AdminMenu/AdminMenu";
import AdminHeader from "../../../components/AdminComponents/AdminHeader/AdminHeader";


const AdminHome = () => {
    return (
        <div className="admin-layout">
            <div className="menu-lateral">
                <AdminMenu />
            </div>
            <div className="admin-main">
                <AdminHeader />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminHome

// Imports Biblioteca 
import React from 'react'
import { Outlet } from 'react-router-dom';

// import CSS
import "./AdminRoutes.css";

// Import Components
import AdminMenu from "../AdminMenu/AdminMenu";
import AdminHeader from "../AdminHeader/AdminHeader";

const AdminRoutes = () => {
    return (
        <div className="admin-layout">
            <AdminMenu />
            <div className="admin-main">
                <AdminHeader />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminRoutes


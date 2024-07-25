import React from 'react';

// Import CSS
import './AdminHome.css';

// Import Components
import AdminDashBoard from '../AdminDashboard/AdminDashBoard';


const AdminHome = () => {
    return (
        <main className='Home-container'>
          <AdminDashBoard /> 
        </main>
    )
}

export default AdminHome

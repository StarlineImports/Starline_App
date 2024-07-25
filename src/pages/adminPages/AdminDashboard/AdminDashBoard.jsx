// Immports Bibliotecas
import React from 'react'

// Imports Css
import './AdminDashBoard.css'

// imports icons and images
import { BsGraphUpArrow } from "react-icons/bs";
import { 
    MdGroups,
    MdOutlineTrendingUp,
    MdChecklist,
    MdHistory
} from "react-icons/md";

const AdminDashBoard = () => {
    return (
        <>
            <main>
                <div className="Title">
                    <h1>Dash<span>Board</span></h1>
                </div>
                <section className='grafil-cards'>
                    <div className="grafil-card">
                        <div className="total-text">
                            <span>Total de Usuario</span>
                            <i><MdGroups /></i>
                        </div>
                        <div className="total-number">
                            <h2>100</h2>
                            <i><MdOutlineTrendingUp /><span>8,5%</span></i>
                            <span className='text-update'>Dados mais recentes</span>
                        </div>
                    </div>
                    <div className="grafil-card">
                        <div className="total-text">
                            <span>Total de pedidos</span>
                            <i><MdChecklist /></i>
                        </div>
                        <div className="total-number">
                            <h2>100</h2>
                            <i><MdOutlineTrendingUp /><span>8,5%</span></i>
                            <span className='text-update'>Dados mais recentes</span>
                        </div>
                    </div>
                    <div className="grafil-card">
                        <div className="total-text">
                            <span>Total de vendas</span>
                            <i><BsGraphUpArrow /></i>
                        </div>
                        <div className="total-number">
                            <h2>R$ 100,00</h2>
                            <i><MdOutlineTrendingUp /><span>8,5%</span></i>
                            <span className='text-update'>Dados mais recentes</span>
                        </div>
                    </div>
                    <div className="grafil-card">
                        <div className="total-text">
                            <span>Total de pendentes</span>
                            <i><MdHistory /></i>
                        </div>
                        <div className="total-number">
                            <h2>100</h2>
                            <i><MdOutlineTrendingUp /><span>8,5%</span></i>
                            <span className='text-update'>Dados mais recentes</span>
                        </div>
                    </div>
                    

                </section>

            </main>
        </>
    )
}

export default AdminDashBoard

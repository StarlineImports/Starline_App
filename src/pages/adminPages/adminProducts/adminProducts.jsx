// Import Bibliotecas
import React from 'react'
import { Link } from 'react-router-dom';

// Import CSS
import './adminProducts.css'
import "../../../AdminGlobal.css";

// Imports Icons img e assets
import {
    MdOutlineSearch,
    MdOutlineGridOn,
    MdAdd,
    MdFilterAlt
} from "react-icons/md";

const adminProducts = () => {
    return (
        <main className='Page-Product'>
            <div className="Title">
                <h1>Produtos <span>Stocks</span></h1>
                <div className="search-bar">
                    <i><MdOutlineSearch /></i>
                    <input type="text" placeholder="Pesquisa" />
                </div>
            </div>

            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="" >
                                <i><MdOutlineGridOn /></i> Stocks de produto
                            </Link>
                        </li>
                        <li>
                            <Link to="" >
                                <i><MdAdd /></i> Novo de produto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <section>
                <ul className='Filtes-stoks'>
                    <span><i><MdFilterAlt />..</i></span>
                    <li className='category-filter'>
                        <label htmlFor="category">Vendas:</label>
                        <select id='category' value="Categorias">
                            <option value="">Todas</option>
                            <option value="Categoria 1">Categoria 1</option>
                            <option value="Categoria 2">Categoria 2</option>
                        </select>
                    </li>
                    <li className='status-filter'>
                        <label htmlFor="status">Status:</label>
                        <select id='status' value="Status">
                            <option value="">Todas</option>
                            <option value="Pendente">Pendente</option>
                            <option value="em-estoque">Em estoque</option>
                            <option value="concluido">concluido</option>
                        </select>
                    </li>
                    <li className='venda-tipo-filter'>
                        <label htmlFor="venda">Vendas:</label>
                        <select id='venda' value="Tipo-Price">
                            <option value="">Todas</option>
                            <option value="Atacado">Pendente</option>
                            <option value="Varejo">Concluido</option>
                        </select>
                    </li>
                    <li className='date-filter'>
                        <label htmlFor="date">Data:</label>
                        <input id='date' type="date" value="date" />
                    </li>
                </ul>
            </section>
            <section className='stock-list'>
                <table>
                    <thead>
                        <tr>
                            <th>img</th>
                            <th>Produto</th>
                            <th>Descriçao</th>
                            <th>Categoria</th>
                            <th>Custo</th>
                            <th>Preço Unt</th>
                            <th>Preço Atacado</th>
                            <th>Stock</th>
                            <th>Marca</th>
                            <th>Data Entrada</th>
                            <th>Data Saida</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default adminProducts

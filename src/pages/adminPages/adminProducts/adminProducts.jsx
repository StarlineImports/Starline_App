// Import Bibliotecas
import React, { useState, useEffect } from "react";
import {
    MdOutlineSearch,
    MdAdd,
    MdFilterAlt,
} from "react-icons/md";
import AddProductModal from "./adminProductsModal/addProductModal";
import { toast } from "react-hot-toast";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../../../firebase";

// Import CSS
import "./adminProducts.css";
import "../../../AdminGlobal.css";

// Imports icons 
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AdminProducts = () => {
    const [isModalProductOpen, setIsModalProductOpen] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productCollection = collection(fireDB, "products");
                const productSnapshot = await getDocs(productCollection);
                const productList = productSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productList);
            } catch (error) {
                console.error("Erro ao buscar produtos: ", error);
                toast.error("Erro ao buscar produtos.");
            }
        };

        fetchProducts();
    }, []);

    const handleAddProductClick = () => {
        console.log("Abrindo modal");
        setIsModalProductOpen(true);
    };

    const handleCloseProductModal = () => {
        console.log("Fechando modal");
        setIsModalProductOpen(false);
    };

    return (
        <main className="Page-Product">
            <toast />
            <div className="Title">
                <h1>
                    Produtos <span>Cadastrados</span>
                </h1>
                <div className="search-bar">
                    <i>
                        <MdOutlineSearch />
                    </i>
                    <input type="text" placeholder="Pesquisa" />
                </div>
            </div>

            <header className="admin-product-header-second">
                <nav>
                    <ul>
                        <li>
                            <button
                                onClick={handleAddProductClick}
                                className="btn-produto"
                            >
                                <i>
                                    <MdAdd />
                                </i>{" "}
                                Adicionar Produto
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <section>
                <ul className="Filtes-stoks">
                    <span>
                        <i>
                            <MdFilterAlt />
                            ..
                        </i>
                    </span>
                    <li className="category-filter">
                        <label htmlFor="category">Categoria:</label>
                        <select id="category">
                            <option value="">Todas</option>
                            <option value="Categoria 1">Categoria 1</option>
                            <option value="Categoria 2">Categoria 2</option>
                        </select>
                    </li>
                    <li className="status-filter">
                        <label htmlFor="status">Status:</label>
                        <select id="status">
                            <option value="">Todas</option>
                            <option value="Pendente">Pendente</option>
                            <option value="Em estoque">Em estoque</option>
                            <option value="Concluido">Concluido</option>
                        </select>
                    </li>
                    <li className="venda-tipo-filter">
                        <label htmlFor="venda">Vendas:</label>
                        <select id="venda">
                            <option value="">Todas</option>
                            <option value="Atacado">Atacado</option>
                            <option value="Varejo">Varejo</option>
                        </select>
                    </li>
                    <li className="date-filter">
                        <label htmlFor="date">Data:</label>
                        <input id="date" type="date" />
                    </li>
                </ul>
            </section>
            <section className="stock-list">
                <table>
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Custo</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Tamanho</th>
                            <th>Vendidos</th>
                            <th>Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.cost}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.size}</td>
                                <td>{product.subcategory}</td>
                                <td>{product.createdAt}</td>
                                <td>
                                    <button className="btn-edit"><FaEdit /></button>
                                    <button className="btn-delete"><MdDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            {isModalProductOpen && <AddProductModal onClose={handleCloseProductModal} />}
        </main>
    );
};

export default AdminProducts;

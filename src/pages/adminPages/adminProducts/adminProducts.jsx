// Import Bibliotecas
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineSearch,
  MdOutlineGridOn,
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

const AdminProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Fechando modal");
    setIsModalOpen(false);
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
            {/* <li>
              <Link to="">
                <i>
                  <MdOutlineGridOn />
                </i>{" "}
                Estoques
              </Link>
            </li> */}
            <li>
              <button
                onClick={handleAddProductClick}
                className="add-product-button btn "
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
              <th>Data Entrada</th>
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
                    className="admin-product-image mt10"
                  />
                </td>
                <td>
                  <h5>{product.name}</h5>
                </td>
                <td>
                  <h5>{product.category}</h5>
                </td>
                <td>
                  <h5>{product.cost}</h5>
                </td>
                <td>
                  <h5>{product.price}</h5>
                </td>
                <td>
                  <h5>{product.stock}</h5>
                </td>
                <td>
                  <h5>{product.size}</h5>
                </td>
                <td>
                  <h5>{product.subcategory}</h5>
                </td>
                <td>
                  <h5>{product.createdAt}</h5>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {isModalOpen && <AddProductModal onClose={handleCloseModal} />}
    </main>
  );
};

export default AdminProducts;

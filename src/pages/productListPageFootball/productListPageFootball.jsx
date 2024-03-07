import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

import Footer from "../../components/footer/footer";
import ProductListAll from "../../components/productListAll/productListAll";

import ProductData from "../../product.json";
import "./productListPage.css";

const ProductListPageFootball = () => {
  const { subcategory } = useParams();

  const footballProducts = ProductData.filter(
    (product) => product.subcategory === "futebol"
  );

  return (
    <>
      <div className="product-list-page-container">
        <div className="product-list-page-header">
          <HeaderComponent />
        </div>
        <div className="product-list-page-body">
          <div className="filter-container"></div>
          <div className="products-header">
            <h5>Coleção Futebol</h5>
            <div className="order-filter-container">
              <label className="order-filter-label">Ordenar Por</label>
              <select className="order-filter">
                <option>Mais Populares</option>
                <option>Lançamentos</option>
                <option>Maior Preço</option>
                <option>Menor Preço</option>
              </select>
            </div>
          </div>
          <ProductListAll
            selectedProducts={footballProducts}
            renderAllProducts={true}
          />
        </div>
        <div className="product-list-page-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProductListPageFootball;

import React, { useState } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

import Footer from "../../components/footer/footer";
import ProductListAll from "../../components/productListAll/productListAll";

import ProductData from "../../product.json";
import "./productListPageBasket.css";

const ProductListPageBasket = () => {
  const { subcategory } = useParams();

  const footballProducts = ProductData.filter(
    (product) => product.subcategory === "acessorios"
  );

  const [orderBy, setOrderBy] = useState("popularity");

  const handleOrderByChange = (e) => {
    setOrderBy(e.target.value);
  };

  const sortProducts = (products, orderBy) => {
    switch (orderBy) {
      case "popularity":
        return products.sort((a, b) => b.popularity - a.popularity);
      case "newest":
        return products.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "priceHigh":
        return products.sort((a, b) => b.price - a.price);
      case "priceLow":
        return products.sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(footballProducts, orderBy);

  return (
    <>
      <div className="product-list-page-container">
        <div className="product-list-page-header">
          <HeaderComponent />
        </div>
        <div className="product-list-page-body">
          <div className="filter-container"></div>
          <div className="products-header">
            <h5>Coleção Basquete</h5>
            <div className="order-filter-container">
              <label className="order-filter-label">Ordenar Por</label>
              <select
                className="order-filter"
                value={orderBy}
                onChange={handleOrderByChange}
              >
                <option value="popularity">Mais Populares</option>
                <option value="newest">Lançamentos</option>
                <option value="priceHigh">Maior Preço</option>
                <option value="priceLow">Menor Preço</option>
              </select>
            </div>
          </div>
          <ProductListAll selectedProducts={sortedProducts} />
        </div>
        <div className="product-list-page-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProductListPageBasket;

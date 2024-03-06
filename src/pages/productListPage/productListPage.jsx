import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

import Footer from "../../components/footer/footer";
import ProductListAll from "../../components/productListAll/productListAll";

import ProductData from "../../product.json";
import "./productListPage.css";

const ProductListPage = () => {
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
          <h1></h1>
          <ProductListAll
            listTitle="Coleção Futebol"
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

export default ProductListPage;

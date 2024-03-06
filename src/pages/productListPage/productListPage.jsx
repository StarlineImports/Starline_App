import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import productData from "../../product.json";
import Footer from "../../components/footer/footer";
import "./productListPage.css";

const ProductListPage = () => {
  const { subcategory } = useParams();

  return (
    <>
      <div></div>
    </>
  );
};

export default ProductListPage;

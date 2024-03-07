import React from "react";
import "./productListAll.css";
import Product from "../product/product";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductListAll = ({ listTitle, selectedProducts }) => {
  return (
    <div className="full-list-all">
      <label className="productList-Text">{listTitle}</label>
      <div className="row mb-3 col-6">
        {selectedProducts.map((product, index) => (
          <div key={index} className="col mb-3">
            <Product productInfo={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListAll;

import React from "react";
import "./productListAll.css";
import Product from "../product/product";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductListAll = ({ listTitle, selectedProducts }) => {
  const colClass = "col-lg-3 col-md-4 col-sm-6 col-12";
  const textClass = "productList-Text";

  const productsInGroups = [];
  const groupSize = 4;

  for (let i = 0; i < selectedProducts.length; i += groupSize) {
    productsInGroups.push(selectedProducts.slice(i, i + groupSize));
  }

  return (
    <div className="full-list">
      <label className={textClass}>{listTitle}</label>
      {productsInGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="row mb-3">
          {group.map((product, index) => (
            <div key={index} className={`mb-3 ${colClass} text-center`}>
              <Product productInfo={product} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductListAll;

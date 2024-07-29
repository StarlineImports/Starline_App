import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./product.css";

const Product = ({ productInfo }) => {
  const hasOldPrice =
    productInfo.oldPrice !== undefined &&
    productInfo.oldPrice !== null &&
    parseFloat(productInfo.oldPrice.replace(",", ".")) >
      parseFloat(productInfo.price.replace(",", "."));

  return (
    <Link className="cart-text" to={`/produto/${productInfo.id}`}>
      <div className="product">
        <img
          className="product-image"
          src={productInfo.image}
          alt={productInfo.name}
        />
        <label className="product-name">{productInfo.name}</label>
        <div></div>
        {hasOldPrice && (
          <label className="productOldPrice">R${productInfo.oldPrice}</label>
        )}
        <label
          className={`product-price ${!hasOldPrice ? "productMargin" : ""}`}
        >
          R${productInfo.price}
        </label>
      </div>
    </Link>
  );
};

Product.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subcategory: PropTypes.string,
  }).isRequired,
};

export default Product;

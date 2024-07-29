import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./category.css";

const Category = ({ productInfo }) => {
  return (
    <Link className="cart-text" to={`/produto/${productInfo.id}`}>
      <div className="category">
        <img
          className="category-image"
          src={productInfo.image}
          alt={productInfo.name}
        />
        <label className="category-name">{productInfo.name}</label>
      </div>
    </Link>
  );
};

Category.propTypes = {
  categoryInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subcategory: PropTypes.string,
  }).isRequired,
};

export default Category;

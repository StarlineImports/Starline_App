import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./category.css";

const Category = ({ categoryInfo }) => {
  return (
    <Link className="cart-text" to={`/produto/${categoryInfo.id}`}>
      <div className="category">
        <img
          className="category-image"
          src={categoryInfo.image}
          alt={categoryInfo.name}
        />
        <label className="category-name">{categoryInfo.name}</label>
      </div>
    </Link>
  );
};

Category.propTypes = {
  categoryInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Category;

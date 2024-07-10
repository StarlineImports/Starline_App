import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const CartItem = (cartProductInfo) => {

    return ( 
        <div className="row">
            <input className="form-check-input" type="radio" value="" aria-label="Radio button for following text input" />
        </div>
    );
}

CartItem.propTypes = {
    cartProductInfo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      oldPrice: PropTypes.string,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      subcategory: PropTypes.string.isRequired,
    }).isRequired,
  };

export default CartItem;
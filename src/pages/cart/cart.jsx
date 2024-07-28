import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/footer/footer";
import "./cart.css";

import CartItem from "../../components/cartItem/cartItem";

const Cart = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="cart-content">
        <CartItem />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/footer/footer";
import "./cart.css";
import ProductData from "../../product.json";
import Button from "react-bootstrap/Button";
import CartItem from "../../components/cartItem/cartItem";

const Cart = () => {
  const selectedProductIds = [6, 11, 9, 10, 15, 2, 3];

  const filteredProducts = ProductData.filter((product) =>
    selectedProductIds.includes(product.id)
  );

  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="cart-content">
        <CartItem />
        <div>
          <form className="cart-result">
            <div className="cart-form">
              <ul className="title-ul">
                <li className="li-title">SubTotal: </li>
                <li className="li-title">Custo de Envio: </li>
                <li className="li-title">Desconto: </li>
                <li className="li-title">Preço Total: </li>
              </ul>
              <ul className="result-ul">
                <li className="result-li">R$ 472,30</li>
                <li className="result-li">R$ 27,70</li>
                <li className="result-li">R$ 97,70</li>
                <li className="result-li">R$ 597,70</li>
              </ul>
            </div>
            <Button className="result-btn" variant="success">
              COMPRAR AGORA
            </Button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;

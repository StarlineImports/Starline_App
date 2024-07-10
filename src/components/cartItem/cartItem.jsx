import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cartItem.css";
import ProductData from "../../product.json";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";

const CartItem = () => {
  const [showCalc, setShowCalc] = useState(false);

  function handleCalc() {
    if (!showCalc) {
      setShowCalc(true);
    } else {
      setShowCalc(false);
    }
  }

  const selectedProductIds = [6, 11, 9, 10, 15, 2, 3];

  const filteredProducts = ProductData.filter((product) =>
    selectedProductIds.includes(product.id)
  );

  return (
    <div className="cart-itens">
      <div className="cart-itens-container row">
        <div className="cart-box-title ">
          <input type="radio" className="check-all" />
          <div className="cart-header-container">
            <h6 className="cart-header-text">Nome do Produto</h6>
            <h6 className="cart-header-text">Tamanho</h6>
            <h6 className="cart-header-text">Quantidade</h6>
            <h6 className="cart-header-text">Preço</h6>
          </div>
        </div>
        {filteredProducts.map((product) => (
          <div key={product.id} className="cart-prod-info">
            <div className="cart-product">
              <input
                className="check-all"
                type="radio"
                value=""
                aria-label="Radio button for following text input"
              />
              <img
                src={product.image}
                alt={product.name}
                className="cart-product-image"
              />
              <h1 className="cart-prod-name">{product.name}</h1>
              <h1 className="cart-prod-size">M</h1>
              <div className="cart-size">
                <button className="cart-size-button">
                  <h1 className="cart-size-text-btn">+</h1>
                </button>
                <div className="cart-size-text-container">
                  <h1 className="cart-size-text">2</h1>
                </div>
                <button className="cart-size-button">
                  <h1 className="cart-size-text-btn">-</h1>
                </button>
              </div>
              <p className="cart-price">R$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-prod-btn">
        <Button variant="danger" className="dgr-btn">
          DELETAR TUDO
        </Button>
        <Button variant="warning" className="cep-btn" onClick={handleCalc}>
          CALCULAR FRETE
        </Button>
        {showCalc && (
          <>
            <input
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="DIGITE SEU CEP"
              className="cep-input"
            ></input>
            <Button variant="warning" className="cep-calc-btn">
              <FaSearch />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;

import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/footer/footer";
import "./cart.css";
import "../../components/cartItem/cartItem.css";
import ProductData from "../../product.json";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";

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
              DELETAR
            </Button>
            <Button variant="warning" className="warn-btn ">
              CALCULAR FRETE
            </Button>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="DIGITE SEU CEP"
              className="cep-btn"
            />
          </div>
        </div>

        <div>
          <form className="cart-result">
            <div className="cart-form">
              <ul className="result-ul">
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
              COMPRAR
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

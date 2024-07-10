import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/footer/footer";
import "./cart.css";
import "../../components/cartItem/cartItem.css";
import ProductData from "../../product.json";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';



const Cart = () => {
  const selectedProductIds = [2, 3];

  const filteredProducts = ProductData.filter((product) =>
    selectedProductIds.includes(product.id)
  );

  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      
      <div className="cart-content">
        <div className="cart-item-box row">
          <div className="cart-box-title ">
            <input type="checkbox" className="check-all" />
            <ul className="">Nome do Produto</ul>
            <ul className="">Tamanho</ul>
            <ul className="">Quantidade</ul>
            <ul className="">Preço</ul>
          </div>
          <div>
            {filteredProducts.map((product) => (
              <div key={product.id} className="cart-prod-info">
                <div className="cart-product">
                  <input
                    className="input-cart-check"
                    type="checkbox"
                    value=""
                    aria-label="Radio button for following text input"
                  />
                  <img src={product.image} alt={product.name} width="70" />
                  <h1 className="cart-prod-name ">{product.name}</h1>
                  <input type="number" className="cart-qtd" />
                  <p className="cart-price"> {product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-prod-btn">
            <Button variant="danger" className="dgr-btn">DELETAR</Button>{' '}
            <Button variant="warning" className="warn-btn ">CALCULAR FRETE</Button>{' '}
          <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="DIGITE SEU CEP" className="cep-btn"/>
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
              <li className="result-li">VALOR</li>
              <li className="result-li">VALOR</li>
              <li className="result-li">VALOR</li>
              <li className="result-li">VALOR</li>
            </ul>
          </div> 
          <Button className="result-btn" variant="success">COMPRAR</Button>{' '}
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

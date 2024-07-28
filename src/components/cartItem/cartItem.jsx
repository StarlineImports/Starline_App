import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cartItem.css";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";

const CartItem = () => {
  const [showCalc, setShowCalc] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [freightValue, setFreightValue] = useState("0,00");

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
    setCartItems(savedCartItems);
    updateCartTotals(savedCartItems);
  }, []);

  const handleCalc = () => {
    setShowCalc(!showCalc);
  };

  const handleOnlyNumber = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    e.target.value = numericValue.slice(0, 20);
  };

  const handleCheckboxChange = (id, size) => {
    const itemIdSize = `${id}-${size}`;
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemIdSize)
        ? prevSelectedItems.filter((item) => item !== itemIdSize)
        : [...prevSelectedItems, itemIdSize]
    );
  };

  const handleQuantityChange = (id, size, operation) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.size === size) {
        const newQuantity =
          operation === "increase"
            ? item.quantity + 1
            : item.quantity > 1
            ? item.quantity - 1
            : item.quantity;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem("cart-items", JSON.stringify(updatedCartItems));
    updateCartTotals(updatedCartItems);
  };

  const handleDeleteItems = () => {
    let updatedCartItems = JSON.parse(localStorage.getItem("cart-items")) || [];

    if (selectedItems.length > 0) {
      const selectedIdsSizes = selectedItems.map((item) => item.split("-"));
      updatedCartItems = updatedCartItems.filter(
        (item) =>
          !selectedIdsSizes.some(
            ([id, size]) => item.id === parseInt(id) && item.size === size
          )
      );
      localStorage.setItem("cart-items", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
      setSelectedItems([]);
    } else {
      localStorage.removeItem("cart-items");
      setCartItems([]);
    }

    updateCartTotals(updatedCartItems);
  };

  const calculatePricePerItem = (totalQuantity) => {
    if (totalQuantity >= 100) return 24.0;
    if (totalQuantity >= 70) return 25.0;
    if (totalQuantity >= 40) return 26.0;
    if (totalQuantity >= 25) return 27.0;
    if (totalQuantity >= 12) return 28.0;
    if (totalQuantity >= 8) return 29.0;
    if (totalQuantity >= 5) return 35.0;
    if (totalQuantity < 5) return 60.0;
  };

  const updateCartTotals = (items) => {
    const totalQuantity = items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const pricePerItem = calculatePricePerItem(totalQuantity);

    const subtotal = (totalQuantity * 60.0).toFixed(2).replace(".", ",");

    const totalPrice = items
      .reduce((total, item) => {
        return total + pricePerItem * item.quantity;
      }, 0)
      .toFixed(2)
      .replace(".", ",");

    const discount = (
      parseFloat(subtotal.replace(",", ".")) -
      parseFloat(totalPrice.replace(",", "."))
    )
      .toFixed(2)
      .replace(".", ",");

    localStorage.setItem("cart-total-value", totalPrice);
    localStorage.setItem("items-quantity", totalQuantity);
    localStorage.setItem("cart-freight-value", freightValue);

    return { subtotal, totalPrice, discount };
  };

  const handleFreightCalculation = () => {
    setFreightValue("31,40");
    localStorage.setItem("cart-freight-value", "31,40");
  };

  const getButtonText = () => {
    if (selectedItems.length === 0) {
      return "DELETAR TUDO";
    }
    if (selectedItems.length === 1) {
      return "DELETAR ITEM";
    }
    return "DELETAR ITENS";
  };

  const { subtotal, discount, totalPrice } = updateCartTotals(cartItems);

  return (
    <div className="cart-itens">
      <div className="cart-total-body">
        <div className="cart-itens-container row">
          <div className="cart-box-title">
            <input type="radio" className="check-all" />
            <div className="cart-header-container">
              <h6 className="cart-header-text">Nome do Produto</h6>
              <h6 className="cart-header-text">Tamanho</h6>
              <h6 className="cart-header-text">Quantidade</h6>
              <h6 className="cart-header-text">Preço</h6>
            </div>
          </div>
          {cartItems.map((product) => (
            <div
              key={`${product.id}-${product.size}`}
              className="cart-prod-info"
            >
              <div className="cart-product">
                <input
                  className="check-all"
                  type="checkbox"
                  checked={selectedItems.includes(
                    `${product.id}-${product.size}`
                  )}
                  onChange={() =>
                    handleCheckboxChange(product.id, product.size)
                  }
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className="cart-product-image"
                />
                <h1 className="cart-prod-name">{product.name}</h1>
                <h1 className="cart-prod-size">{product.size}</h1>
                <div className="cart-size">
                  <button
                    className="cart-size-button"
                    onClick={() =>
                      handleQuantityChange(product.id, product.size, "increase")
                    }
                  >
                    <h1 className="cart-size-text-btn">+</h1>
                  </button>
                  <div className="cart-size-text-container">
                    <h1 className="cart-size-text">{product.quantity}</h1>
                  </div>
                  <button
                    className="cart-size-button"
                    onClick={() =>
                      handleQuantityChange(product.id, product.size, "decrease")
                    }
                  >
                    <h1 className="cart-size-text-btn">-</h1>
                  </button>
                </div>
                <p className="cart-price">
                  R${" "}
                  {(
                    calculatePricePerItem(
                      cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )
                    ) * product.quantity
                  )
                    .toFixed(2)
                    .replace(".", ",")}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">
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
                  <li className="result-li">R$ {subtotal}</li>
                  <li className="result-li">
                    R$ {localStorage.getItem("cart-freight-value") || "0,00"}
                  </li>
                  <li className="result-li">R$ {discount}</li>
                  <li className="result-li">R$ {totalPrice}</li>
                </ul>
              </div>
              <Button className="result-btn" variant="success">
                COMPRAR AGORA
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="cart-prod-btn">
        <Button
          variant="danger"
          className="dgr-btn"
          onClick={handleDeleteItems}
        >
          {getButtonText()}
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
              onInput={handleOnlyNumber}
            />
            <Button
              variant="warning"
              className="cep-calc-btn"
              onClick={handleFreightCalculation}
            >
              <FaSearch />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;

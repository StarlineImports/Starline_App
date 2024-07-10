import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import productData from "../../product.json";
import Footer from "../../components/footer/footer";
import "./productPage.css";

const ProductPage = () => {
  const [price, setPrice] = useState();
  const [additionalPrice, setAdditionalPrice] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const { id } = useParams();
  const productInfo = productData.find(
    (product) => product.id === parseInt(id)
  );

  useEffect(() => {
    setPrice(productInfo.price);
  }, []);

  if (!productInfo) {
    return <div>Produto não encontrado.</div>;
  }

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = parseFloat(productInfo.price.replace(",", "."));
      if (additionalPrice) {
        totalPrice += 10;
      }
      console.log(totalPrice);
      return setPrice(totalPrice.toFixed(2).replace(".", ","));
    };
    calculateTotalPrice();
  }, [additionalPrice]);

  const hasOldPrice =
    productInfo.oldPrice !== undefined &&
    productInfo.oldPrice !== null &&
    parseFloat(productInfo.oldPrice) > parseFloat(productInfo.price);

  const handleSizeButtonClick = (size) => {
    setSelectedSizes(size);

    setAdditionalPrice(["GG", "XGG", "XGGG"].includes(size));
  };

  return (
    <div>
      <div className="product-page-full-body">
        <HeaderComponent />
        <div className="categories">
          <h4 className="mini-header-categories">
            {productInfo.team.toUpperCase()}
          </h4>
        </div>
        <div className="productPage-body">
          <img
            className="productPage-image"
            src={productInfo.image}
            alt={productInfo.name}
          />
          <div>
            {ProductData.map((product) => (
              <div key={product.id} className="cart-prod-info">
                <input
                  className="input-cart-check"
                  type="checkbox"
                  value=""
                  aria-label="Radio button for following text input"
                />
                <img src={product.image} alt={product.name} width="80" />
                <h1 className="cart-prod-name ">{product.name}</h1>
                <p>Preço: {product.price}</p>
              </div>
            ))}
            <div className="desktop-product-name">
              <h2>{productInfo.name}</h2>
              <p className="product-description">{productInfo.description}</p>
            </div>
            <div className="product-size-container">
              Tamanhos:
              <div className="size-button-container">
                <button
                  className={`size-button ${
                    selectedSizes === "P" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("P")}
                >
                  P
                </button>
                <button
                  className={`size-button ${
                    selectedSizes === "M" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("M")}
                >
                  M
                </button>
                <button
                  className={`size-button ${
                    selectedSizes === "G" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("G")}
                >
                  G
                </button>
                <button
                  className={`size-button ${
                    selectedSizes === "GG" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("GG")}
                >
                  GG
                </button>
                <div className="mobile-size-button-division">
                  <button
                    className={`size-button ${
                      selectedSizes === "XGG" ? "colored-size-button" : ""
                    }`}
                    onClick={() => handleSizeButtonClick("XGG")}
                  >
                    XGG
                  </button>
                  <button
                    className={`size-button ${
                      selectedSizes === "XGGG" ? "colored-size-button" : ""
                    }`}
                    onClick={() => handleSizeButtonClick("XGGG")}
                  >
                    XGGG
                  </button>
                </div>
                <button
                  className={`size-button size-button-pc ${
                    selectedSizes === "XGG" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("XGG")}
                >
                  XGG
                </button>
                <button
                  className={`size-button size-button-pc ${
                    selectedSizes === "XGGG" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("XGGG")}
                >
                  XGGG
                </button>
              </div>
            </div>
            <div className="desktop-product-price">
              <div className="price-div">
                {hasOldPrice && (
                  <div className="productOldPrice">
                    R${productInfo.oldPrice}
                  </div>
                )}
                <label
                  className={`productPage-price ${
                    !hasOldPrice ? "productMargin" : ""
                  }`}
                >
                  R${price}
                </label>
              </div>
            </div>
            <div className="mobile-product-name">
              <h2>{productInfo.name}</h2>
              {hasOldPrice && (
                <div className="productOldPrice">R${productInfo.oldPrice}</div>
              )}
              <label
                className={`productPage-price ${
                  !hasOldPrice ? "productMargin" : ""
                }`}
              >
                R${price}
              </label>
            </div>
            <p className="mobile-product-description">
              {productInfo.description}
            </p>
            <button className="buy-button">COMPRAR AGORA</button>
            <button className="add-cart-button">
              <FaCartShopping />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import productData from "../../product.json";
import Footer from "../../components/footer/footer";
import "./productPage.css";

const ProductPage = () => {
  const [additionalPrice, setAdditionalPrice] = useState(false);

  const { id } = useParams();
  const productInfo = productData.find(
    (product) => product.id === parseInt(id)
  );

  if (!productInfo) {
    return <div>Produto não encontrado.</div>;
  }

  const handleAdditionalPriceClick = () => {
    setAdditionalPrice(true);
  };

  const calculateTotalPrice = () => {
    let totalPrice = parseFloat(productInfo.price.replace(",", "."));
    if (additionalPrice) {
      totalPrice += 10;
    }
    return totalPrice.toFixed(2);
  };

  const hasOldPrice =
    productInfo.oldPrice !== undefined &&
    productInfo.oldPrice !== null &&
    parseFloat(productInfo.oldPrice) > parseFloat(productInfo.price);

  return (
    <div>
      <div className="product-page-full-body">
        <HeaderComponent />
        <div className="categories">
          <h4 className="mini-header-categories">
            {productInfo.category.toUpperCase()}
          </h4>
        </div>
        <div className="productPage-body">
          <img
            className="productPage-image"
            src={productInfo.image}
            alt={productInfo.name}
          />
          <div>
            <div className="desktop-product-name">
              <h2>{productInfo.name}</h2>
              <p className="product-description">{productInfo.description}</p>
            </div>
            <div className="product-size-container">
              Tamanhos:
              <div className="size-button-container">
                <button className="size-button">P</button>
                <button className="size-button">M</button>
                <button className="size-button">G</button>
                <button className="size-button">GG</button>
                <div className="mobile-size-button-division">
                  <button
                    className="size-button"
                    onClick={handleAdditionalPriceClick}
                  >
                    XGG
                  </button>
                  <button className="size-button">XGGG</button>
                </div>
                <button className="size-button size-button-pc">XGG</button>
                <button className="size-button size-button-pc">XGGG</button>
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
                  R${calculateTotalPrice()}
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
                R${calculateTotalPrice()}
              </label>
            </div>
            <p className="mobile-product-description">
              {productInfo.description}
            </p>
            <button className="buy-button">COMPRAR AGORA</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { toast, Toaster } from "react-hot-toast";
import productData from "../../product.json";
import Footer from "../../components/footer/footer";
import "./productPage.css";

const ProductPage = () => {
  const [price, setPrice] = useState();
  const [additionalPrice, setAdditionalPrice] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const { id } = useParams();
  const productInfo = productData.find(
    (product) => product.id === parseInt(id)
  );

  useEffect(() => {
    setPrice(productInfo.price);
  }, [productInfo]);

  if (!productInfo) {
    return <div>Produto não encontrado.</div>;
  }

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = parseFloat(productInfo.price.replace(",", "."));
      if (additionalPrice) {
        totalPrice += 10;
      }
      setPrice(totalPrice.toFixed(2).replace(".", ","));
    };
    calculateTotalPrice();
  }, [additionalPrice, productInfo.price]);

  const hasOldPrice =
    productInfo.oldPrice !== undefined &&
    productInfo.oldPrice !== null &&
    parseFloat(productInfo.oldPrice) > parseFloat(productInfo.price);

  const handleSizeButtonClick = (size) => {
    setSelectedSize(size);
    setAdditionalPrice(["GG", "XGG", "XGGG"].includes(size));
  };

  const handleBuyNowClick = () => {
    if (!selectedSize) {
      toast.error("Selecione um tamanho");
      return;
    }

    const cartItem = {
      id: productInfo.id,
      name: productInfo.name,
      image: productInfo.image,
      price: price,
      size: selectedSize,
      quantity: 1,
    };

    let existingCartItems =
      JSON.parse(localStorage.getItem("cart-items")) || [];
    const existingItemIndex = existingCartItems.findIndex(
      (item) => item.id === cartItem.id && item.size === cartItem.size
    );

    if (existingItemIndex !== -1) {
      existingCartItems[existingItemIndex].quantity += 1;
    } else {
      existingCartItems.push(cartItem);
    }

    localStorage.setItem("cart-items", JSON.stringify(existingCartItems));

    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <div>
      <div className="product-page-full-body">
        <Toaster />
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
            <div className="desktop-product-name">
              <h2>{productInfo.name}</h2>
              <p className="product-description">{productInfo.description}</p>
            </div>
            <div className="product-size-container">
              Tamanhos:
              <div className="size-button-container">
                <button
                  className={`size-button ${
                    selectedSize === "P" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("P")}
                >
                  P
                </button>
                <button
                  className={`size-button ${
                    selectedSize === "M" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("M")}
                >
                  M
                </button>
                <button
                  className={`size-button ${
                    selectedSize === "G" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("G")}
                >
                  G
                </button>
                <button
                  className={`size-button ${
                    selectedSize === "GG" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("GG")}
                >
                  GG
                </button>
                <div className="mobile-size-button-division">
                  <button
                    className={`size-button ${
                      selectedSize === "XGG" ? "colored-size-button" : ""
                    }`}
                    onClick={() => handleSizeButtonClick("XGG")}
                  >
                    XGG
                  </button>
                  <button
                    className={`size-button ${
                      selectedSize === "XGGG" ? "colored-size-button" : ""
                    }`}
                    onClick={() => handleSizeButtonClick("XGGG")}
                  >
                    XGGG
                  </button>
                </div>
                <button
                  className={`size-button size-button-pc ${
                    selectedSize === "XGG" ? "colored-size-button" : ""
                  }`}
                  onClick={() => handleSizeButtonClick("XGG")}
                >
                  XGG
                </button>
                <button
                  className={`size-button size-button-pc ${
                    selectedSize === "XGGG" ? "colored-size-button" : ""
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
            <button className="buy-button" onClick={handleBuyNowClick}>
              COMPRAR AGORA
            </button>
            <button className="add-cart-button" onClick={handleBuyNowClick}>
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

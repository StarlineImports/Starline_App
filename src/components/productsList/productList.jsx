// ProductList.jsx
import React, { useState, useEffect } from "react";
import "./productList.css";
import Product from "../product/product";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = ({ listTitle, selectedProducts }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1265);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1265);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth < 1750
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth < 1750);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const colClass = isSmallScreen
    ? "d-flex align-items-center justify-content-center col-12"
    : "col-lg-2";

  const textClass = `col-12 productList-Text d-flex align-items-center justify-content-center${
    isSmallScreen ? " mb-3" : ""
  }`;

  return (
    <div
      className={`row full-list ${
        isSmallScreen ? "justify-content-center" : ""
      }`}
    >
      <label className={textClass}>{listTitle}</label>

      {selectedProducts
        .slice(0, isSmallScreen ? 3 : isMediumScreen ? 4 : 5)
        .map((product, index) => (
          <div
            key={index}
            className={`col-md-4 col-sm-12 mb-3 ${colClass} text-center`}
          >
            <Product productInfo={product} />
          </div>
        ))}
    </div>
  );
};

export default ProductList;

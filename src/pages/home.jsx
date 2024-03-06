// Home.jsx
import React from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import ComponentImage from "../components/carousel/index.jsx";
import ProductList from "../components/productsList/productList.jsx";
import Footer from "../components/footer/footer.jsx";
import ProductData from "../product.json";

function Home() {
  const promotionProducts = [
    ProductData[9],
    ProductData[4],
    ProductData[6],
    ProductData[3],
    ProductData[2],
  ];
  const selectedProducts = [
    ProductData[1],
    ProductData[5],
    ProductData[7],
    ProductData[8],
    ProductData[3],
  ];

  return (
    <div className="row">
      <HeaderComponent />
      <ComponentImage />
      <ProductList
        listTitle="Promoção Relampago"
        selectedProducts={promotionProducts}
      />
      <ProductList
        listTitle="Produtos mais Vendidos"
        selectedProducts={selectedProducts}
      />

      <Footer />
    </div>
  );
}

export default Home;

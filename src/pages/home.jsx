import React, { useContext } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import ComponentImage from "../components/carousel/index.jsx";
import ProductList from "../components/productsList/productList.jsx";
import Footer from "../components/footer/footer.jsx";
import ProductData from "../product.json";

import myContext from "../context/myContext.jsx";

function Home() {
  const context = useContext(myContext);
  const name = context;

  const promotionProducts = [
    ProductData[89],
    ProductData[90],
    ProductData[91],
    ProductData[92],
    ProductData[93],
  ];
  const selectedProducts = [
    ProductData[89],
    ProductData[90],
    ProductData[91],
    ProductData[92],
    ProductData[93],
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

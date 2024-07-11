import React, { useContext } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import ComponentImage from "../components/carousel/index.jsx";
import ProductList from "../components/productsList/productList.jsx";
import Footer from "../components/footer/footer.jsx";
import ProductData from "../product.json";
import MyItems from "./myItems/myItems.jsx";
import myContext from "../context/myContext.jsx";

function Home() {
  const context = useContext(myContext);
  const name = context;

  const promotionProducts = [
    ProductData[9],
    ProductData[4],
    ProductData[6],
    ProductData[3],
    ProductData[2],
  ];
  const selectedProducts = [
    ProductData[1],
    ProductData[11],
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
<<<<<<< HEAD
      <Footer/>
=======

      <Footer />
>>>>>>> 2d554afe13ee969e7cb28e09f725303453c294ef
    </div>
  );
}

export default Home;

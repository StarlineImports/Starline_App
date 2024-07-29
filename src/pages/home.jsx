import React, { useContext, useState, useEffect } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import ComponentImage from "../components/carousel/index.jsx";
import ProductList from "../components/productsList/productList.jsx";
import Footer from "../components/footer/footer.jsx";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../firebase";
import myContext from "../context/myContext.jsx";

function Home() {
  const context = useContext(myContext);
  const name = context;

  const [promotionProducts, setPromotionProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(fireDB, "products");
        const productSnapshot = await getDocs(productsRef);
        const products = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const promotionProductIDs = [1, 2, 3, 4, 5];
        const selectedProductIDs = [1, 2, 3, 4, 5];

        const promotionProducts = products.filter((product) =>
          promotionProductIDs.includes(product.id)
        );
        const selectedProducts = products.filter((product) =>
          selectedProductIDs.includes(product.id)
        );

        setPromotionProducts(promotionProducts);
        setSelectedProducts(selectedProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="row">
      <HeaderComponent />
      <ComponentImage />
      <ProductList
        listTitle="Promoção Relâmpago"
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

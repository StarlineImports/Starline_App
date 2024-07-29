import React, { useContext, useState, useEffect } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import ComponentImage from "../components/carousel/index.jsx";
import ProductList from "../components/productsList/productList.jsx";
import CategoryList from "../components/category/categoryList/categoryList.jsx";
import Footer from "../components/footer/footer.jsx";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../firebase";
import myContext from "../context/myContext.jsx";

function Home() {
  const context = useContext(myContext);
  const name = context;
  const [promotionCategories, setPromotionCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [promotionProducts, setPromotionProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesRef = collection(fireDB, "category");
        const categorySnapshot = await getDocs(categoriesRef);
        const categories = categorySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const promotionCategoryIDs = [1, 2, 3, 4, 5];
        const selectedCategoryIDs = [1, 2, 3, 4, 5];

        const promotionCategories = categories.filter((category) =>
          promotionCategoryIDs.includes(category.id)
        );
        const selectedCategories = categories.filter((category) =>
          selectedCategoryIDs.includes(category.id)
        );

        setPromotionCategories(promotionCategories);
        setSelectedCategories(selectedCategories);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="row">
      <HeaderComponent />
      <ComponentImage />
      <CategoryList
        listTitle="Promoção Relâmpago"
        selectedProducts={promotionCategories}
      />
      <CategoryList
        listTitle="Produtos mais Vendidos"
        selectedProducts={selectedCategories}
      />
      <Footer />
    </div>
  );
}

export default Home;

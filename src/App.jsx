import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn/singIn";
import ProductPage from "./pages/productPage/productPage";
import Cart from "./pages/cart/cart";
import Register from "./pages/register/register";
import ProductListPageFootball from "./pages/productListPages/productListPageFootball/productListPageFootball";
import ProductListPageAcessories from "./pages/productListPages/productListPageAccessories/productListPageAccessories";
import ProductListPageNFL from "./pages/productListPages/productListPageNFL/productListPageNFL";
import ProductListPageBall from "./pages/productListPages/productListPageBall/productListPageBall";
import ProductListPageBasket from "./pages/productListPages/productListPageBasket/productListPageBasket";
import ProductListPageF1 from "./pages/productListPages/productListPageF1/productListPageF1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<SignIn />} />
        <Route path="/produto/:id" element={<ProductPage />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/search/futebol" element={<ProductListPageFootball />} />
        <Route
          path="/search/acessorios"
          element={<ProductListPageAcessories />}
        />
        <Route path="/search/nfl" element={<ProductListPageNFL />} />
        <Route path="/search/bolas" element={<ProductListPageBall />} />
        <Route path="/search/basquete" element={<ProductListPageBasket />} />
        <Route path="/search/f1" element={<ProductListPageF1 />} />
      </Routes>
    </Router>
  );
}

export default App;

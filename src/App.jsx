import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn/singIn";
import ProductPage from "./pages/productPage/productPage";
import Cart from "./pages/cart/cart";
import Register from "./pages/register/register";
import ProductListPageFootball from "./pages/productListPageFootball/productListPageFootball";
import ProductListPageAcessories from "./pages/productListPageAccessories/productListPageAccessories";

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
      </Routes>
    </Router>
  );
}

export default App;

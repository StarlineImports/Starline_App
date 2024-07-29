import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import SignIn from "./pages/signIn/singIn";
import ProductPage from "./pages/productPage/productPage";
import Cart from "./pages/cart/cart";
import Register from "./pages/register/register";
import ProductListPageFootball from "./pages/productListPages/productListPageFootball/productListPageFootball";
import ProductListPageFC from "./pages/productListPages/productListPageFootball/productListPageFC";
import ProductListPageFShorts from "./pages/productListPages/productListPageFootball/productListPageFShorts";
import ProductListPageFConj from "./pages/productListPages/productListPageFootball/productListPageFConj";
import ProductListPageFJaq from "./pages/productListPages/productListPageFootball/productListPageFJaq";
import ProductListPageFBall from "./pages/productListPages/productListPageFootball/productListPageFBall";
import ProductListPageAcessories from "./pages/productListPages/productListPageAccessories/productListPageAccessories";
import ProductListPageNFL from "./pages/productListPages/productListPageNFL/productListPageNFL";
import ProductListPageBall from "./pages/productListPages/productListPageBall/productListPageBall";
import ProductListPageBasket from "./pages/productListPages/productListPageBasket/productListPageBasket";
import ProductListPageF1 from "./pages/productListPages/productListPageF1/productListPageF1";
import Perfil from "./pages/profile/perfil";
import AdminHome from "./pages/adminPages/AdminHome/AdminHome";
import AdminProducts from "./pages/adminPages/adminProducts/adminProducts";
import AdminDashBoard from "./pages/adminPages/AdminDashboard/AdminDashBoard";
import MyState from "./context/myState";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entrar" element={<SignIn />} />
          <Route path="/produto/:id" element={<ProductPage />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/cadastrar" element={<Register />} />
          <Route path="/search/futebol" element={<ProductListPageFootball />} />
          <Route
            path="/search/futebol/camisas"
            element={<ProductListPageFC />}
          />
          <Route
            path="/search/futebol/shorts"
            element={<ProductListPageFShorts />}
          />
          <Route
            path="/search/futebol/conjuntos"
            element={<ProductListPageFConj />}
          />
          <Route
            path="/search/futebol/jaquetas"
            element={<ProductListPageFJaq />}
          />
          <Route
            path="/search/futebol/bolas"
            element={<ProductListPageFBall />}
          />
          <Route
            path="/search/acessorios"
            element={<ProductListPageAcessories />}
          />
          <Route path="/search/nfl" element={<ProductListPageNFL />} />
          <Route path="/search/bolas" element={<ProductListPageBall />} />
          <Route path="/search/basquete" element={<ProductListPageBasket />} />
          <Route path="/search/f1" element={<ProductListPageF1 />} />

          <Route path="/admin" element={<AdminHome />}>
            <Route path="/admin/adminDashBoard" element={<AdminDashBoard />} />
            <Route path="/admin/adminProducts" element={<AdminProducts />} />
          </Route>
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;

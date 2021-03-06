import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import BasePage from "./pages/BasePage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProducDetailPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import CheckoutPage from "./pages/CheckoutPage";
import UserPage from "./pages/UserPage";
import WishListPage from "./pages/WishListPage";
import ComparePage from "./pages/ComparePage";
import NotFound from "./pages/404";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import TeamPage from "./pages/TeamPage";
import PortfolioPage from "./pages/PortFolioPage";
import PortFolioDetailPage from "./pages/PortFolioDetailPage";
import ContactPage from "./pages/ContactPage";
import { useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");
      dispatch(userActions.rebootUser({ name, email, token }));
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home/*" element={<BasePage />}>
            <Route path="" element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="shop/products" element={<ProductsPage />} />
            <Route path="shop/products/:productId" element={<ProductDetailPage />} />
            <Route path="myaccount" element={<UserPage />} />
            <Route path="wishlist" element={<WishListPage />} />
            <Route path="compare" element={<ComparePage />} />
            <Route path="compare" element={<ComparePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="portfolio/details" element={<PortFolioDetailPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="/shoppingcart" element={<ShoppingCartPage />} />
          <Route path="/shoppingcart/:cartId" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

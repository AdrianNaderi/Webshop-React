import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import LoginUser from "./Components/LoginUser/LoginUser";
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

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    setError("");
  };

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

        {user.email !== "" ? (
          <div className="welcome">
            <h2>
              Welcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout} class="logout">
              Logout
            </button>
          </div>
        ) : (
          <LoginUser Login={Login} error={error} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;

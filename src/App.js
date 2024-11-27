// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductByBrand from "./pages/ProductByBrand";
import ProductDetail from "./pages/ProductDetail";
import AuthForm from "./pages/AuthForm";
import CartPage from "./pages/CartPage";
import Discount from "./pages/Discount"; 
import LaptopRepair from "./pages/LaptopRepair"; 
import Contact from "./components/Contact";
import News from "./components/News";
import ScreenReplacement from "./pages/ScreenReplacement";
import BatteryReplacement from "./pages/BatteryReplacement";
import KeyboardRepair from "./pages/KeyboardRepair";
import SoftwareTroubleshooting from "./pages/SoftwareTroubleshooting";
import "./styles/App.css";
import Saleoff from "./pages/Saleoff";
import FreeShipping from "./pages/Freeshipping";
import FreeMouse from "./pages/Freemouse";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductList onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/products/:brand"
            element={<ProductByBrand onAddToCart={handleAddToCart} />}
          />
          <Route path="/auth" element={<AuthForm />} />
          
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          <Route path="/discounts" element={<Discount />} /> {/* Thêm route Discount */}
          <Route path="/laptop-repair" element={<LaptopRepair />} /> {/* Thêm route LaptopRepair */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/screen-replacement" element={<ScreenReplacement />} />
          <Route path="/battery-replacement" element={<BatteryReplacement />} />
          <Route path="/keyboard-repair" element={<KeyboardRepair />} />
          <Route path="/software-troubleshooting" element={<SoftwareTroubleshooting />} />
          <Route path="/sale-off" element={<Saleoff />} />
          <Route path="/free-shipping" element={<FreeShipping />} />
          <Route path="/free-mouse" element={<FreeMouse />} />


        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

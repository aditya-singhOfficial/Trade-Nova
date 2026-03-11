import React from "react";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Pricing from "./pages/pricing/Pricing";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Support from "./pages/support/Support";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

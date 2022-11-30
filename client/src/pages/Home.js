import React from "react";
import Header from "../components/Header";
import ProductAddToCart from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <ProductAddToCart />
      <Footer />
    </div>
  );
};

export default Home;

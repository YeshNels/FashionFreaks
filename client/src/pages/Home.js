import React from "react";
import Header from "../components/Header";
import ProductList from "../components/Test/Please";
import Footer from "../components/Footer";
//import ProductAll from "../components/ProductAll"
const Home = () => {
  return (
    <div className="container">
      <Header />
      <ProductList />
      {/* <ProductAll /> */}
      <Footer />
    </div>
  );
};

export default Home;

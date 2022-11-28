import React from "react";
import WithSubnavigation from "../components/Navbar/index";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <WithSubnavigation />
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;

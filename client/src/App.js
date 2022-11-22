import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductAddToCart from "./components/Card";
// import SimpleCard from "./components/signIn";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductAddToCart />
    </div>
  );
}

export default App;

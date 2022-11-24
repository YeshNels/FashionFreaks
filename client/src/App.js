import React from "react";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductAddToCart from "./components/Card";
//import SignIn from "./components/signIn";

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

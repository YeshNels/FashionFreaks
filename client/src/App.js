import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductAddToCart from "./components/Card";
import { StoreProvider } from './utils/GlobalState';
//import SignIn from "./components/signIn";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Card } from "@chakra-ui/react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./styles/App.css";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Header />
//       <ProductAddToCart />
//     </div>
//   );
// }

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51M8WfvJYmNmQs93r91x3PTxSy2FCo9jj7jboQiEhCQT5Jz0AdQEhTpmMvG2uue1aMYDbbUVpGEjbgm3JlrpAYSJS00OUICV5Jj");

function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={<Header />} 
              />
              <Route 
                path="/login" 
                element={<signIn />} 
              />
              <Route 
                path="/signup" 
                element={<signUp />} 
              />
              <Route 
                path="/success" 
                element={<ProductAddToCart />} 
              />
              {/* <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              /> */}
              <Route 
                path="/products/:id" 
                element={<Card />} 
              />
              {/* <Route 
                path="*" 
                element={<NoMatch />} 
              /> */}
            </Routes>
          </StoreProvider>
        </div>
      </Router>

      <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
    </ApolloProvider>

  );
}


export default App;

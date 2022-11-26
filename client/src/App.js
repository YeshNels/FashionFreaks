import React from "react";
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

function App() {
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
    </ApolloProvider>
  );
}




export default App;

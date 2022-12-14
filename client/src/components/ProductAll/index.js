import React from "react";
import { SimpleGrid, Heading, Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect } from "react";
import ProductCard from "../ProductCard";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <>
      <SimpleGrid p={5} columns={1} row={1}>
        <Heading size="md">All product</Heading>
      </SimpleGrid>
      {state.products.length ? (
        <>
          {filterProducts().map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </>
      ) : (
        <Alert status="warning">
          <AlertIcon />
          You haven't added anything to your cart yet!
        </Alert>
      )}
    </>
  );
}

export default ProductList;

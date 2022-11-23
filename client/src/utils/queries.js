import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  query category {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query getProduct($product: ID) {
    product {
      _id
      name
      description
      price
      quantity
      image
      category {
        name
      }
    }
  }
`;

export const QUERY_USER = gql`
  query getUser {
    user {
      firstName
      lastName
      email
      orders {
        _id
        purchasedate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_ORDER = gql`
  query getorder($order: ID) {
    order {
      _id
      purchasedate
      products {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getcheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
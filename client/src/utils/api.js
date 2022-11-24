export const getAllCartProducts = () => {
    return fetch('/api/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  
  export const addProducttoCart = (productData) => {
    return fetch('/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
  };
  
  export const getProduct = (productId) => {
    return fetch(`/api/product/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  
  export const editCart = (quantityData) => {
    return fetch(`/api/product/${quantityData}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quantityData),
    });
  };
  
  
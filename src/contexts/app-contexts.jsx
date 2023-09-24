import React, { useEffect, useState } from "react";

const AppContexts = React.createContext();

export const AppProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartIsOpen, setCartVisibilityState] = useState(false);
  const [searchFieldIsOpen, setSearchFieldVisibilityState] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  
  const deleteCartProduct = (id) => {
    const currentItems = cartProducts;
    const searchResult = currentItems.filter((obj) => obj.productId != id);
    setCartProducts(searchResult);
  };

  useEffect(() => {
    setSubtotal(
      cartProducts.reduce(
        (total, obj) => total + obj.productPrice * obj.productQuantity,
        0
      )
    );
  }, [cartProducts]);

  return (
    <AppContexts.Provider
      value={{
        cartProducts,
        setCartProducts,
        cartIsOpen,
        setCartVisibilityState,
        searchFieldIsOpen,
        setSearchFieldVisibilityState,
        searchResult,
        setSearchResult,
        deleteCartProduct,
        subtotal,
      }}
    >
      {children}
    </AppContexts.Provider>
  );
};

export default AppContexts;

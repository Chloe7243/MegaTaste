import React, { useState } from "react";

const AppContexts = React.createContext();

export const AppProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartIsOpen, setCartVisibilityState] = useState(false);
  const [searchFieldIsOpen, setSearchFieldVisibilityState] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const deleteCartProduct = (id) => {
    const currentItems = cartProducts;
    console.log("before", currentItems.length);
    const searchResult = currentItems.filter((obj) => obj.productId != id);
    console.log("after", currentItems.length);
    setCartProducts(searchResult);
    console.log("deleted");
  };

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
      }}
    >
      {children}
    </AppContexts.Provider>
  );
};

export default AppContexts;

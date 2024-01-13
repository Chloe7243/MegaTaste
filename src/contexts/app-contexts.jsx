import React, { useEffect, useState } from "react";

const AppContexts = React.createContext();

export const AppProvider = ({ children }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [cartIsOpen, setCartVisibilityState] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [searchFieldIsOpen, setSearchFieldVisibilityState] = useState(false);

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
        subtotal,
        cartIsOpen,
        cartProducts,
        searchResult,
        showMobileNavbar,
        searchFieldIsOpen,
        setSearchResult,
        setCartProducts,
        deleteCartProduct,
        setShowMobileNavbar,
        setCartVisibilityState,
        setSearchFieldVisibilityState,
      }}
    >
      {children}
    </AppContexts.Provider>
  );
};

export default AppContexts;

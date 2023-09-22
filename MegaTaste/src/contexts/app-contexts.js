import React from "react";

const AppContexts = React.createContext({
  cartProducts: [],
  setCartProducts: () => {},
  cartIsOpen: false,
  setCartVisibilityState: () => {},
  searchFieldIsOpen: false,
  setSearchFieldVisibilityState: () => {},
  searchResult: [],
  setSearchResult: () => {},
});

export default AppContexts;

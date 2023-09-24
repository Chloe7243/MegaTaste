import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Components/Forms/Login";
import RootLayout from "./Components/RootLayout/RootLayout";
import Register from "./Components/Forms/Register";

import MenuPage from "./Components/Pages/MenuPage/MenuPage";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Contact from "./Components/Pages/ContactPage/Contact";
import AboutPage from "./Components/Pages/AboutPage/AboutPage";
import CategoryPage from "./Components/Pages/CategoryPage/CategoryPage";
import SearchResult from "./Components/Pages/SearchResultPage/SearchResult";
import ProductDetails from "./Components/Pages/ProductDetailsPage/ProductDetails";
import { AppProvider } from "./contexts/app-contexts";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="*" element={<ErrorPage />} />
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="menu">
            <Route index element={<MenuPage />} />
            <Route path=":name" element={<CategoryPage />} />
            <Route path="/menu/:name/:id" element={<ProductDetails />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="search-results/:name" element={<SearchResult />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;

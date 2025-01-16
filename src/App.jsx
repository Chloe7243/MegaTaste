import "./App.css";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Forms/Login";
import RootLayout from "./components/RootLayout/RootLayout";
import Register from "./components/Forms/Register";

import MenuPage from "./pages/MenuPage/MenuPage";
import HomePage from "./pages/HomePage/HomePage";
import Contact from "./pages/ContactPage/Contact";
import AboutPage from "./pages/AboutPage/AboutPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import SearchResult from "./pages/SearchResultPage/SearchResult";
import ProductDetails from "./pages/ProductDetailsPage/ProductDetails";
import { AppProvider } from "./contexts/app-contexts";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

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

import "./App.css";
import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Login from "./Components/Forms/Login";
import RootLayout from "./Components/RootLayout/RootLayout";
import Register from "./Components/Forms/Register";

import MenuPage from "./Components/Pages/MenuPage/MenuPage";
import CategoryPage from "./Components/Pages/CategoryPage/CategoryPage";
import AboutPage from "./Components/Pages/AboutPage/AboutPage";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Contact from "./Components/Pages/ContactPage/Contact";
import ProductDetails from "./Components/Pages/ProductDetailsPage/ProductDetails";

function App() {
return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu">
          <Route index element={<MenuPage />} />
          <Route path=":name" element={<CategoryPage />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;

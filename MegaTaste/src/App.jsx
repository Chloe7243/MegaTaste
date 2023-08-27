import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Components/Forms/Login";
import RootLayout from "./Components/RootLayout/RootLayout";
import Register from "./Components/Forms/Register";

import MenuPage from "./Components/MenuPage/MenuPage";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import HomePage from "./Components/HomePage/HomePage";
import Contact from "./Components/ContactPage/Contact";
import ProductDetails from "./Components/ProductDetailsPage/ProductDetails";
//
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage/>,
    children: [
      { path: ``, element: <HomePage /> },
      { path: `login`, element: <Login /> },
      { path: `register`, element: <Register /> },
      { path: `menu`, element: <MenuPage /> },
      {
        path: `/menu/:categoryName`,
        element: <MenuPage />,
        children: [{ path: `:catagoryId`, element: <ProductDetails /> }],
      },
      { path: `contact`, element: <Contact /> },
    ],
  },
  // { path: `/categories/${categoryName}`, element: <HomePage/>},
]);

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://burgers-hub.p.rapidapi.com/burgers",
        {
          withCredentials: true,
          headers: {
            "X-RapidAPI-Key":
              "7100a97762mshbcf1a830ab1b346p1e4b03jsn027d4fa992af",
            "X-RapidAPI-Host": "burgers-hub.p.rapidapi.com",
          },
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };
  const fetchUser = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://megataste-a6d27-default-rtdb.firebaseio.com/users.json"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };
  return <RouterProvider router={router} />;
}

export default App;

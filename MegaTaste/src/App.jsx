import "./App.css";
import { useState } from "react";
import Login from "./Components/Forms/Login";
import SignUp from "./Components/Forms/SignUp";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CategoryPage from "./Components/CategoryPage/CategoryPage";

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
  return (
    <>
      <NavBar />
      <button onClick={fetchProducts}>Get Products</button>
      <div>
        <CategoryPage
          products={products}
          categoryName={"Food"}
          isLoading={isLoading}
          error={error}
        />
      </div>
      <Login />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;

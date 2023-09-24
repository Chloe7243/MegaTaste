import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import Info from "../Info/Info";
import Cart from "../Cart/Cart";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div style={{position: "relative"}}>
      <Cart />
      <Info />
      <SearchBar />
      <NavBar />
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

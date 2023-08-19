import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import Info from "../Info/Info";
import Cart from "../Cart/Cart";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      {/* <Cart /> */}
      <Info />
      {/* <SearchBar /> */}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;

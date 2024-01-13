import { Outlet } from "react-router-dom";

import Cart from "../Cart/Cart";
import Info from "../Info/Info";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import MobileNav from "../MobileNav/MobileNav";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div style={{ position: "relative" }}>
      <Cart />
      <Info />
      <SearchBar />
      <NavBar />
      <MobileNav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster/>
    </div>
  );
};

export default RootLayout;

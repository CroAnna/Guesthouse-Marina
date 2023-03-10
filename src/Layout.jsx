import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ScrollButton from "./Components/ScrollButton";
import ScrollToTop from "./Components/ScrollToTop";

const Layout = () => {
  return (
    <main>
      <ScrollToTop />
      <ScrollButton />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;

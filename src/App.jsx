import React from "react";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

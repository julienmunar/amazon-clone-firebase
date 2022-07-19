import React from "react";
import Header from "../components/homePage/Header";
import Footer from "../components/homePage/Footer";
import BodyCart from "../components/CartPage/BodyCart";
import Nav from "../components/homePage/Nav";
const cart = () => {
  return (
    <div>
      <Header />
      <Nav />
      <BodyCart /> 
      <Footer />
    </div>
  );
};

export default cart;

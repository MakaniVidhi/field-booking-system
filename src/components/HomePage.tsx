import React from "react";
import Navbar from "./common/Navbar";
import SwiperComponent from "./Slider";
import Footer from "./common/Footer";
import { Outlet } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <Navbar />
      {/* <SwiperComponent /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomePage;

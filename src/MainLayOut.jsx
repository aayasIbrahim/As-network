import React from "react";
import { Outlet } from "react-router-dom";
import NavBer from "./componets/NavBer.jsx";
import Footer from "./componets/Footer/Footer.jsx";

export default function MainLayOut() {
  return (
    <>
      <NavBer />
      <main style={{ paddingTop: "60px", minHeight: "180vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

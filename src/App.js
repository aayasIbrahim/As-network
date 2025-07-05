import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayOut from "./MainLayOut";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Offer from "./pages/Offer.jsx";
import Coverage from "./pages/Coverage.jsx";
import "./App.css";
import PricingPage from "./pages/PricingPage.jsx";
import PayBillPage from "./pages/PayBillPage.jsx";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="offer" element={<Offer />} />
          <Route path="coverage" element={<Coverage />} />
          <Route path="pricing" element={<PricingPage/>} />
          <Route path="paybill" element={<PayBillPage/>} />

        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;

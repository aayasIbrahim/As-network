import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayOut from "./MainLayOut";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Offer from "./pages/Offer.jsx";
import Coverage from "./pages/Coverage.jsx";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="offer" element={<Offer />} />
          <Route path="coverage" element={<Coverage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;

import React from "react";
import NavBer from "../componets/NavBer";
import MySwiper from "../componets/slider/MySwiper";
import Cards from "../componets/cards/Cards";
import WhatsAppButton from "../componets/WhatsAppButton";
import CallButton from "../componets/CallButton";
import Connect from "../componets/Connect";
import Priceing from "../componets/Priceing";
import CoveraAgeAria from "../componets/CoveraAgeAria";

function Home() {
  return (
    <div className="dark:bg-gray-800 ">
      <NavBer />
      <MySwiper />
      <WhatsAppButton />
      <CallButton />
      <Cards /> 
      <Connect />
      <Priceing />
      <CoveraAgeAria />
    </div>
  );
}

export default Home;

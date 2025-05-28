import React from "react";
import NavBer from "../componets/NavBer";
import MySwiper from "../componets/slider/MySwiper";
import Cards from "../componets/cards/Cards";
import WhatsAppButton from "../componets/WhatsAppButton";
import CallButton from "../componets/CallButton";


function Home() {
  return (
    <div className="dark:bg-gray-800 ">
      <NavBer />

      <MySwiper />
      <div className="flex">
        <WhatsAppButton />
        <CallButton />
      </div>

      <Cards />
    </div>
  );
}

export default Home;

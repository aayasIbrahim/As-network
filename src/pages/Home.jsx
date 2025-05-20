import React from "react";
import NavBer from "../componets/NavBer";
import MySwiper from "../componets/slider/MySwiper";
import Cards from "../componets/cards/Cards";
// import Bannar from "../componets/Banner/Banner";

function Home() {
  return (
    <div className="dark:bg-gray-800 ">
      <NavBer />
     
       <MySwiper/>
        <Cards/>
    </div>
  );
}

export default Home;

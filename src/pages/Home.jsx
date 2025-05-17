import React from "react";
import NavBer from "../componets/NavBer";
import MySwiper from "../componets/slider/MySwiper";
// import Bannar from "../componets/Banner/Banner";

function Home() {
  return (
    <div className="bg-gray-900 dark:bg-gray-800 ">
      <NavBer />
     <div >
       <MySwiper/>
     </div>
    </div>
  );
}

export default Home;

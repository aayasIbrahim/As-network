import React from "react";
import Package from "./Package";

function Priceing() {
  return (
    <section className="border-b-[1px] border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto lg:py-24 md:py-24 py-16 px-5 md:px-8 lg:pb-28">
        <div className="sm:flex sm:align-left">
          <div className="flex-auto">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-gray-900 sm:text-left dark:text-gray-100">
              Pricing Plans
            </h1>
            <p className="mt-3 lg:text-xl md:text-xl text-base text-gray-500 sm:text-left">
              Choose a package that suits your budget & business.
            </p>
          </div>
        </div>
        <div className='class="lg:flex md:flex grid items-center gap-5 mt-6 sm:mt-0"'>
          <a
            href="trkfg"
            className="px-4 py-3 rounded-lg bg-blue-600 hover:bg-gray-900 dark:hover:bg-blue-700 text-white shadow-xl text-base"
          >
            All Packages
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-16"> 

        <Package
        level={"Gold+"}
        bgcolor={" rgb(100, 116, 139)"}
        Mbps={"60 Mbps"}
        taka={"TK1500"}
        />
        <Package
        level={"Platinum+"}
        bgcolor={"#F8718C"}
        Mbps={"70 Mbps"}
        taka={"TK1260"}
        />
        <Package
        level={"Diamond+"}
        bgcolor={"#4f46e5"}
        Mbps={"80 Mbps"}
        taka={"TK1575"}
        />
        <Package
        level={"Sapphire+"}
        bgcolor={"#4b5563"}
        Mbps={"100 Mbps"}
        taka={"TK1575"}
        />

        </div>
      </div>
    </section>
  );
}

export default Priceing;

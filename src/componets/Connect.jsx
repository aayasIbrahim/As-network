import React from "react";
import img1 from "../assets/connect section/1.jpg";
import img2 from "../assets/connect section/2.jpg";
import img3 from "../assets/connect section/3.jpg";
import img4 from "../assets/connect section/4.jpg";
const card = [
  {
    photo: img1,
    tittle: "How to Pay",
  },
  {
    photo: img2,
    tittle: "Coverage area",
  },
  {
    photo: img3,
    tittle: "ASNetwork self Care",
  },
  {
    photo: img4,
    tittle: "Get in touch",
  },
];
export default function Connect() {
  return (
    <section className="border-b-[1px] border-gray-200 dark:border-gray-700">
      <div className=" max-w-7xl mx-auto lg:py-28 md:py-28 py-12 lg:px-8 md:px-8 px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 lg:gap-6 md:gap-5 gap-4">
          {card.map((item, index) => {
            return (
              <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <img
                  src={item.photo}
                  alt={item.tittle}
                  className="w-full h-40 object-cover"
                />
                <a href="/">
                <div className="bg-green-100 lg:px-8 md:px-8 px-4 py-6 z-10">
                    <h1 className="text-sm md:text-xl lg:text-xl font-semibold text-gray-600 text-center">{item.tittle}</h1>
                </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

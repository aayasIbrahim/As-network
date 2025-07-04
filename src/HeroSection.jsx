import React from "react";

function HeroSection({heading,pragraph,heroimg}) {
  return (
    <section class="relative bg-indigo-800 -z-10">
      <div className="absolute inset-0">
        <img
          src={heroimg}
          alt={heroimg}
          height={900}
          width={1200}
          class="w-full h-full object-cover bg-opacity-50"
          style={{ color: "transparent" }}
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply"></div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:pb-32 md:pb-20 pb-16 lg:pt-40 md:pt-40 pt-52 -mt-24 sm:py-32 px-5 md:px-8 lg:mt-0">
        <h1 className="font-extrabold tracking-tight pt-12 lg:pt-0 text-white lg:text-5xl md:text-4xl text-4xl">{heading}</h1>
        <p className="lg:mt-6 md:mt-3 mt-6 lg:text-lg md:text-base text-lg text-indigo-100 max-w-3xl">{pragraph}</p>

      </div>
    </section>
  );
}

export default HeroSection;

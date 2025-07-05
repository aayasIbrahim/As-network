import React from "react";
import HeroSection from "../componets/HeroSection.jsx";
import coverImg from "../assets/coverage-bg.webp";
export default function Coverage() {
  return (
    <>
      <HeroSection
        heroimg={coverImg}
        heading={"Coverage area"}
        pragraph={
          "ASNetwork's coverage area is wide. Dot Internet is spread almost everywhere in Dhaka city. Check the availability of all coverage areas in Chakaria Cox's Bazar."
        }
      />
    </>
  );
}

import React from "react";
import HeroSection from "../componets/HeroSection";
import OfferImg from "../assets/offers.webp"

function Offer() {
  return <>
  <HeroSection
  heroimg={OfferImg}
  heading={"Offers & Campaigns"}
  pragraph={"Since 2020, we've been providing top-notch broadband services with cutting-edge technology. As one of Bangladesh's fastest-growing ISPs, we're committed to affordable prices and excellent customer service. Stay tuned for exciting offers and promotions to enhance your internet experience!"}
  />
  </>;
}

export default Offer;

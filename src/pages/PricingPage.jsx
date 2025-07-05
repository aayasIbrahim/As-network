import React from 'react'
import HeroSection from '../componets/HeroSection';
import PricingImg from '../assets/pricing.webp'

function PricingPage() {
  return (
    <>
    <HeroSection
      heroimg={PricingImg}
      heading={"Pricing Plans"}
      pragraph={"ASNetwork pricing plans are flexible. ASNetwork offers competitive rates and pricing plans to help you find one that fits your needs and budget."}
    />
    </>
  )
}

export default PricingPage;
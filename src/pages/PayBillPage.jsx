import React from 'react'
import HeroSection from '../componets/HeroSection';
import PricingImG from '../assets/pricing.webp'

function PayBillPage() {
  return (
  <>
  <HeroSection
  heroimg={PricingImG}
  heading={"How to Pay?"}
  pragraph={"Simply make your payment via internet and mobile banking and enjoy automatic bill payment update with Dot Internet's automatic billing system. Here is the step by step procedure on how to pay online."}
  />
  </>
  )
}

export default PayBillPage;
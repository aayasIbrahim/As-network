import React from 'react'
import HeroSection from '../componets/HeroSection.jsx'
import Aboutimage from "../assets/about.webp"
function About() {
  return (
    <>
    <HeroSection
    heroimg={Aboutimage}
    heading={"About ASNetwork"}
    pragraph={"ASNetwork has started its operation in the year 2020 with the commitment of providing quality internet service at an affordable price. At the time of commencement, ASNetwork started with broadband service using state-of-the-art technology."}

    />
    </>
  )
}

export default About
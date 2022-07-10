import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSplit
        className="illustration-section-01"
        invertMobile
        imageFill
        hasBgColor
      />
      <FeaturesTiles />
      <Testimonial topDivider />
      <Cta className="illustration-section-01" hasBgColor split />
    </>
  );
};

export default Home;

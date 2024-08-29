import AboutMainSec from "@/components/about/AboutMainSec";
import SectionTwo from "@/components/home/sectwo/SectionTwo";
import React from "react";

const About = () => {
  return (
    <>
      <AboutMainSec
        url="/assets/about/aboutimg.jpg"
        parent="About Us"
        title="About Us"
      />
      <SectionTwo />
    </>
  );
};

export default About;

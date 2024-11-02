import AboutMainSec from "@/components/about/AboutMainSec";
import Demo from "@/components/home/demo/Demo";
import Timeline from "@/components/home/hometimeline/Timeline";
import SectionTwo from "@/components/home/sectwo/SectionTwo";
import VideoInstruct from "@/components/home/videoInstruct/VideoInstruct";
import React from "react";

import { metadata } from "./alayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const About = () => {
  return (
    <>
      <AboutMainSec
        url="/assets/about/aboutimg.jpg"
        parent="About Us"
        title="About Us"
      />
      <SectionTwo />
      <VideoInstruct />
      <Timeline />
      <Demo />
    </>
  );
};

export default About;

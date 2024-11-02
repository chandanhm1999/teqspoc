import MainP from "@/components/mainCont/MainP";
import Devopsres from "@/components/resource/resourceSection/devopsresponce/Devopsres";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import React from "react";

import { metadata } from "../rlayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Devops = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/resources/devops"></link>
      <MainP
        url="/assets/resourse/interview/maindevops.jpg"
        parent="Devops Interview Questions & Answers"
        title="Devops Interview Questions & Answers"
      />
      <Devopsres />
      <ContactUsSection />
    </>
  );
};

export default Devops;

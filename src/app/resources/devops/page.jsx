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
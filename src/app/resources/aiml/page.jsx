import React from "react";
import MainP from "@/components/mainCont/MainP";
import Amilr from "@/components/resource/resourceSection/aimlr/Amilr";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import { metadata } from "../rlayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Aiml = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/resources/aiml"></link>
      <MainP
        url="/assets/resourse/aim.jpg"
        parent="AI/ML Questions & Answers"
        title="AI/ML Questions & Answers"
      />
      <Amilr />
      <ContactUsSection />
    </>
  );
};

export default Aiml;

import MainP from "@/components/mainCont/MainP";
import Scrummasterresources from "@/components/resource/resourceSection/scrum/Scrummasterresources";
import ContactUsSection from "@/components/sysContact/ContactUsSection";
import React from "react";

import { metadata } from "../rlayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Scrummaster = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/resources/scrummaster"></link>
      <MainP
        url="/assets/resourse/interview/mainscrum.jpg"
        parent="Scrummaster Interview Questions & Answers"
        title="Scrummaster Interview Questions & Answers"
      />
      <Scrummasterresources />
      <ContactUsSection />
    </>
  );
};

export default Scrummaster;

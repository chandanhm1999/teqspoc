import React from "react";
import MainP from "@/components/mainCont/MainP";
import HrRes from "@/components/resource/resourceSection/hrres/HrRes";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import { metadata } from "../rlayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };
const Testingres = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/hr.jpg"
        parent="HR Recruiter Interview Questions & Answers"
        title="HR Recruiter Interview Questions & Answers"
      />
      <HrRes />
      <ContactUsSection />
    </>
  );
};

export default Testingres;

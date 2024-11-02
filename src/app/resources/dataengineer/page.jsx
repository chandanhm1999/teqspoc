import MainP from "@/components/mainCont/MainP";
import Dataengineerres from "@/components/resource/resourceSection/dataengineerres/Dataengineerres";
import ContactUsSection from "@/components/sysContact/ContactUsSection";
import React from "react";

import { metadata } from "../rlayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Dataengineer = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/data.jpg"
        parent="DataEngineer Interview Questions & Answers"
        title="Data Engineer Interview Questions & Answers"
      />
      <Dataengineerres />
      <ContactUsSection />
    </>
  );
};

export default Dataengineer;

import MainP from "@/components/mainCont/MainP";
import DotnetR from "@/components/resource/resourceSection/dotnet/DotnetR";
import ContactUsSection from "@/components/sysContact/ContactUsSection";
import React from "react";

import { metadata } from "../rlayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Dotnet = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/maindotnet.jpg"
        parent="DotNet"
        title="DotNet Interview Questions & Answers"
      />
      <DotnetR />
      <ContactUsSection />
    </>
  );
};

export default Dotnet;

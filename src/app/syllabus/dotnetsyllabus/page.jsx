import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Dotnets from "@/components/syllabus/dotnets/Dotnets";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import { metadata } from "../../courses/clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Dotnetsyllabus = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/syllabus/dotnetsyllabus"></link>
      <MainSec
        url="/assets/sys/dotnet.jpg"
        parent="Dotnetsyllabus"
        title="DotNet-Syllabus"
      />
      <Dotnets />
      <ContactUsSection />
    </>
  );
};

export default Dotnetsyllabus;

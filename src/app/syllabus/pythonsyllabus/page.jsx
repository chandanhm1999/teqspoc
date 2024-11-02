import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Pythons from "@/components/syllabus/pythons/Pythons";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import { metadata } from "../../courses/clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Pythonsyllabus = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/syllabus/pythonsyllabus"></link>
      <MainSec
        url="/assets/sys/pythons.jpg"
        parent="Python-Syllabus"
        title="Python-Syllabus"
      />
      <Pythons />
      <ContactUsSection />
    </>
  );
};

export default Pythonsyllabus;

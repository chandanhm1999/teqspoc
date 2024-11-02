import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Testings from "@/components/syllabus/testings/Testings";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import { metadata } from "../../courses/clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Testingsyllabus = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/syllabus/testingsyllabus"></link>
      <MainSec
        url="/assets/sys/test.jpg"
        parent="Testingsyllabus"
        title="Testing-Syllabus"
      />
      <Testings />
      <ContactUsSection />
    </>
  );
};

export default Testingsyllabus;
import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Javas from "@/components/syllabus/javas/Javas";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import { metadata } from "../../courses/clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Javasyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/java.jpg"
        parent="Javasyllabus"
        title="Java-Syllabus"
      />
      <Javas />
      <ContactUsSection />
    </>
  );
};

export default Javasyllabus;

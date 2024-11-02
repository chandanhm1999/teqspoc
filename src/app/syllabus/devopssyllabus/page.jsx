import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import DevOpsSyllabus from "@/components/syllabus/devOpsSyllabus/DevOpsSyllabus";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import { metadata } from "../../courses/clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Devopssyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/devops.jpg"
        parent="Devopssyllabus"
        title="Devops-Syllabus"
      />
      <DevOpsSyllabus />
      <ContactUsSection />
    </>
  );
};

export default Devopssyllabus;
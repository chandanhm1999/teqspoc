import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Hr from "../../../components/syllabus/hrrecuiter/Hr";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import { metadata } from "../../courses/clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Hrrecuitersyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/hr.jpg"
        parent="HR Recuiter-Syllabus"
        title="HR Recuiter-Syllabus"
      />
      <Hr />
      <ContactUsSection />
    </>
  );
};

export default Hrrecuitersyllabus;

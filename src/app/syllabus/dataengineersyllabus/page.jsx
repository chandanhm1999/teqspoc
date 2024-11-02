import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Datas from "@/components/syllabus/datas/Datas";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import { metadata } from "../../courses/clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Dataengineersyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/data.jpg"
        parent="Dataengineersyllabus"
        title="DataEngineer-Syllabus"
      />
      <Datas />
      <ContactUsSection />
    </>
  );
};

export default Dataengineersyllabus;
import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import AimlCourse from "@/components/syllabus/aimlCourse/AimlCourse";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import { metadata } from "../../courses/clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Aimlsyllabus = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/syllabus/aimlsyllabus"></link>
      <MainSec
        url="/assets/sys/ai.jpg"
        parent="AL/ML-Syllabus"
        title="AL/ML-Syllabus"
      />
      <AimlCourse />
      <ContactUsSection />
    </>
  );
};

export default Aimlsyllabus;

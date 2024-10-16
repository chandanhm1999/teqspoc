import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import AimlCourse from "@/components/syllabus/aimlCourse/AimlCourse";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

const Aimlsyllabus = () => {
  return (
    <>
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

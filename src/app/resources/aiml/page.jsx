import React from "react";
import MainP from "@/components/mainCont/MainP";
import Amilr from "@/components/resource/resourceSection/aimlr/Amilr";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

const Aiml = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/aim.jpg"
        parent="AI/ML Questions & Answers"
        title="AI/ML Questions & Answers"
      />
      <Amilr />
      <ContactUsSection />
    </>
  );
};

export default Aiml;

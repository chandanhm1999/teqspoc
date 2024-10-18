import React from "react";
import MainP from "@/components/mainCont/MainP";
import Testingress from "@/components/resource/resourceSection/testingress/Testingress";
import Testingressauto from "@/components/resource/resourceSection/testingress/Testingressauto";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

const Testingres = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/testing.jpg"
        parent="Testing Interview Questions & Answers"
        title="Testing Interview Questions & Answers"
      />
      <Testingress />
      <Testingressauto />
      <ContactUsSection />
    </>
  );
};

export default Testingres;

import React from "react";
import MainP from "@/components/mainCont/MainP";
import Pythonr from "@/components/resource/resourceSection/pythonr/Pythonr";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

const Pythonsmain = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/pyt.jpg"
        parent="Python Questions & Answers"
        title="Python Questions & Answers"
      />
      <Pythonr />
      <ContactUsSection />
    </>
  );
};

export default Pythonsmain;

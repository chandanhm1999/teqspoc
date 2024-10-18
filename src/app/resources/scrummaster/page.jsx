import MainP from "@/components/mainCont/MainP";
import Scrummasterresources from "@/components/resource/resourceSection/scrum/Scrummasterresources";
import ContactUsSection from "@/components/sysContact/ContactUsSection";
import React from "react";

const Scrummaster = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/mainscrum.jpg"
        parent="Scrummaster Interview Questions & Answers"
        title="Scrummaster Interview Questions & Answers"
      />
      <Scrummasterresources />
      <ContactUsSection />
    </>
  );
};

export default Scrummaster;

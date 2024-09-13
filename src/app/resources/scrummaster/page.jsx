import MainSec from "@/components/home/contact/mainSec/MainSec";
import Scrummasterresources from "@/components/resource/resourceSection/scrum/Scrummasterresources";
import React from "react";

const Scrummaster = () => {
  return (
    <>
      <MainSec
        url="/assets/resourse/interview/mainscrum.jpg"
        parent="Scrummaster Interview Questions & Answers"
        title="Scrummaster"
      />
      <Scrummasterresources />
    </>
  );
};

export default Scrummaster;

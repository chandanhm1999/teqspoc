import FreeJob from "@/components/freeJob/FreeJob";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import React from "react";

const Freejobassistance = () => {
  return (
    <>
      <MainSec
        url="/assets/freejob/freepost.jpg"
        parent="FreeJobAssistance"
        title="Free Job Assistance"
      />
      <FreeJob />
    </>
  );
};

export default Freejobassistance;

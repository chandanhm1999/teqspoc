import MainSec from "@/components/home/contact/mainSec/MainSec";
import Dataengineerres from "@/components/resource/resourceSection/dataengineerres/Dataengineerres";
import React from "react";

const Dataengineer = () => {
  return (
    <>
      <MainSec
        url="/assets/resourse/interview/data.jpg"
        parent="DataEngineer Interview Questions & Answers"
        title="DataEngineer Resourse"
      />
      <Dataengineerres />
    </>
  );
};

export default Dataengineer;

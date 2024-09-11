import MainSec from "@/components/home/contact/mainSec/MainSec";
import Resource from "@/components/resource/resources";
import Dataengineerres from "@/components/resource/resourceSection/dataengineerres/Dataengineerres";
import React from "react";

const Dataengineer = () => {
  return (
    <>
      <MainSec
        url="/assets/resourse/resou.jpg"
        parent="DataEngineer Interview Questions & Answers"
        title="DataEngineer Resourse"
      />
      <Dataengineerres />
    </>
  );
};

export default Dataengineer;

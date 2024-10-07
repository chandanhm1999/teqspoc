import Demo from "@/components/home/demo/Demo";
import MainP from "@/components/mainCont/MainP";
import Dataengineerres from "@/components/resource/resourceSection/dataengineerres/Dataengineerres";
import React from "react";

const Dataengineer = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/data.jpg"
        parent="DataEngineer Interview Questions & Answers"
        title="Data Engineer Interview Questions & Answers"
      />
      <Dataengineerres />
      <Demo />
    </>
  );
};

export default Dataengineer;

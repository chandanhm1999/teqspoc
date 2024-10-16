import React from "react";
import MainP from "@/components/mainCont/MainP";
import Demo from "@/components/home/demo/Demo";
import HrRes from "@/components/resource/resourceSection/hrres/HrRes";

const Testingres = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/hr.jpg"
        parent="HR Recruiter Interview Questions & Answers"
        title="HR Recruiter Interview Questions & Answers"
      />
      <HrRes />
      <Demo />
    </>
  );
};

export default Testingres;

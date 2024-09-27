import React from "react";
import MainP from "@/components/mainCont/MainP";
import Testingress from "@/components/resource/resourceSection/testingress/Testingress";
import Demo from "@/components/home/demo/Demo";

const Testingres = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/testing.jpg"
        parent="Testing Interview Questions & Answers"
        title="Testing Interview Questions & Answers"
      />
      <Testingress />
      <Demo />
    </>
  );
};

export default Testingres;

import React from "react";
import MainP from "@/components/mainCont/MainP";
import Testingress from "@/components/resource/resourceSection/testingress/Testingress";

const Testingres = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/testing.jpg"
        parent="Testing Interview Questions & Answers"
        title="Testing Interview Questions & Answers"
      />
      <Testingress />
    </>
  );
};

export default Testingres;

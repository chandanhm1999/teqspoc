import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Testingress from "@/components/resource/resourceSection/testingress/Testingress";

const Testingres = () => {
  return (
    <>
      <MainSec
        url="/assets/resourse/interview/testing.jpg"
        parent="Testing Interview Questions & Answers"
        title="Testing Interview Questions & Answers"
      />
      <Testingress />
    </>
  );
};

export default Testingres;

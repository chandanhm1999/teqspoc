import MainSec from "@/components/home/contact/mainSec/MainSec";
import Devopsres from "@/components/resource/resourceSection/devopsresponce/Devopsres";

import React from "react";

const Devops = () => {
  return (
    <>
      <MainSec
        url="/assets/resourse/interview/maindevops.jpg"
        parent="Devops Interview Questions & Answers"
        title="Devops Resourse"
      />
      <Devopsres />
    </>
  );
};

export default Devops;

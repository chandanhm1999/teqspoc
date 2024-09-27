import MainP from "@/components/mainCont/MainP";
import Devopsres from "@/components/resource/resourceSection/devopsresponce/Devopsres";

import React from "react";

const Devops = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/maindevops.jpg"
        parent="Devops Interview Questions & Answers"
        title="Devops Interview Questions & Answers"
      />
      <Devopsres />
    </>
  );
};

export default Devops;

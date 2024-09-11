import MainSec from "@/components/home/contact/mainSec/MainSec";
import Devopsres from "@/components/resource/resourceSection/devopsres/devopsres";
import React from "react";

const Devops = () => {
  return (
    <>
      <MainSec
        url="/assets/resourse/resou.jpg"
        parent="Devops Interview Questions & Answers"
        title="Devops Resourse"
      />
      <Devopsres />
    </>
  );
};

export default Devops;

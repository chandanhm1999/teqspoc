import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Dotnets from "@/components/syllabus/dotnets/Dotnets";

const Dotnetsyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/dotnet.jpg"
        parent="Dotnetsyllabus"
        title="DotNet-Syllabus"
      />
      <Dotnets />
    </>
  );
};

export default Dotnetsyllabus;

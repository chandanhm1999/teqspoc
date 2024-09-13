import MainSec from "@/components/home/contact/mainSec/MainSec";
import DotnetR from "@/components/resource/resourceSection/dotnet/DotnetR";
import React from "react";

const Dotnet = () => {
  return (
    <>
      <MainSec
        url="/assets/resourse/interview/maindotnet.jpg"
        parent="DotNet"
        title="DotNet Interview Questions & Answers"
      />
      <DotnetR />
    </>
  );
};

export default Dotnet;

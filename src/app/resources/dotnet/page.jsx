import Demo from "@/components/home/demo/Demo";
import MainP from "@/components/mainCont/MainP";
import DotnetR from "@/components/resource/resourceSection/dotnet/DotnetR";
import React from "react";

const Dotnet = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/maindotnet.jpg"
        parent="DotNet"
        title="DotNet Interview Questions & Answers"
      />
      <DotnetR />
      <Demo />
    </>
  );
};

export default Dotnet;

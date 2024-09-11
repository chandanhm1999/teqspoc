import MainSec from "@/components/home/contact/mainSec/MainSec";
import DotnetR from "@/components/resource/resourceSection/dotnet/DotnetR";
import React from "react";

const Dotnet = () => {
  return (
    <>
      <MainSec
        url="/assets/resourse/resou.jpg"
        parent="DotNet"
        title="DotNet"
      />
      <DotnetR />
    </>
  );
};

export default Dotnet;

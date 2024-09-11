import MainSec from "@/components/home/contact/mainSec/MainSec";
import Resource from "@/components/resource/resources";
import React from "react";

const Resources = () => {
  return (
    <>
      <MainSec
        url="/assets/resourse/resou.jpg"
        parent="Resourse"
        title="Resourse"
      />
      <Resource />
    </>
  );
};

export default Resources;

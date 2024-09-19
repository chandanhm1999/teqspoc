import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Carrer from "@/components/carrer/Carrer";

const Careers = () => {
  return (
    <>
      <MainSec
        url="/assets/carrers/resume.jpg"
        parent="Carrers"
        title="Carrers"
      />
      <Carrer />
    </>
  );
};

export default Careers;
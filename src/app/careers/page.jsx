import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Carrer from "@/components/carrer/Carrer";
import { metadata } from "./clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Careers = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/careers"></link>
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
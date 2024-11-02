import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Carrer from "@/components/carrer/Carrer";
import { metadata } from "./clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

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
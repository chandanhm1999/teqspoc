import FreeJob from "@/components/freeJob/FreeJob";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import React from "react";

import { metadata } from "./flayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Freejobassistance = () => {
  return (
    <>
      <MainSec
        url="/assets/freejob/freepost.jpg"
        parent="FreeJobAssistance"
        title="Free Job Assistance"
      />
      <FreeJob />
    </>
  );
};

export default Freejobassistance;

import MainSec from "@/components/home/contact/mainSec/MainSec";
import ReferFrnd from "@/components/refer&earn/ReferFrnd";
import React from "react";

import { metadata } from "./clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Refer = () => {
  return (
    <>
      <MainSec
        url="/assets/refer/new.jpg"
        parent="Refer & Earn"
        title="Refer & Earn"
      />
      <ReferFrnd />
    </>
  );
};

export default Refer;

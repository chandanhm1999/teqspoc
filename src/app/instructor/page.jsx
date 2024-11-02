import MainSec from "@/components/home/contact/mainSec/MainSec";
import Instruct from "@/components/instructor/Instruct";
import React from "react";

import { metadata } from "./inlayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Instructor = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/instructor"></link>
      <MainSec
        url="/assets/instruct/int.jpg"
        parent="Instructor"
        title="Instructor"
      />
      <Instruct />
    </>
  );
};

export default Instructor;
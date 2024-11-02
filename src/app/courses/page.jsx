import Coursess from "@/components/coursespage/Coursess";
import Batchess from "@/components/home/batchess/Batchess";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

import React from "react";
import { metadata } from "./clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Courses = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/courses"></link>
      <MainSec
        url="/assets/contact/contacting.jpg"
        parent="Courses"
        title="Courses"
      />
      <Coursess />
      <Batchess />
      <ContactUsSection />
    </>
  );
};

export default Courses;

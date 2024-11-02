import MainP from "@/components/mainCont/MainP";
import JavaRR from "@/components/resource/resourceSection/javaRR/JavaRR";
import ContactUsSection from "@/components/sysContact/ContactUsSection";
import React from "react";
import { metadata } from "../rlayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };
const Javaresource = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/java.jpg"
        parent="Java"
        title="Java Interview Questions & Answers"
      />
      <JavaRR />
      <ContactUsSection />
    </>
  );
};

export default Javaresource;

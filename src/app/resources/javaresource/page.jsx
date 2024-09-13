import MainSec from "@/components/home/contact/mainSec/MainSec";
import JavaRR from "@/components/resource/resourceSection/javaRR/JavaRR";
import React from "react";

const Javaresource = () => {
  return (
    <>
      <MainSec
        url="/assets/resourse/interview/java.jpg"
        parent="Java"
        title="Java Interview Questions & Answers"
      />
      <JavaRR />
    </>
  );
};

export default Javaresource;

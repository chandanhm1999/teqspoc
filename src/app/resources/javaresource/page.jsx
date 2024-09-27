import MainP from "@/components/mainCont/MainP";
import JavaRR from "@/components/resource/resourceSection/javaRR/JavaRR";
import React from "react";

const Javaresource = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/interview/java.jpg"
        parent="Java"
        title="Java Interview Questions & Answers"
      />
      <JavaRR />
    </>
  );
};

export default Javaresource;

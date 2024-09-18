import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Javas from "@/components/syllabus/javas/Javas";

const Javasyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/java.jpg"
        parent="Javasyllabus"
        title="Java-Syllabus"
      />
      <Javas />
    </>
  );
};

export default Javasyllabus;

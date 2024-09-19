import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Testings from "@/components/syllabus/testings/Testings";

const Testingsyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/test.jpg"
        parent="Testingsyllabus"
        title="Testing-Syllabus"
      />
      <Testings />
    </>
  );
};

export default Testingsyllabus;
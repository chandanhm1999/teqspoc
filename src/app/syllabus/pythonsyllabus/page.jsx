import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Pythons from "@/components/syllabus/pythons/Pythons";

const Pythonsyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/pythons.jpg"
        parent="Python-Syllabus"
        title="Python-Syllabus"
      />
      <Pythons />
    </>
  );
};

export default Pythonsyllabus;

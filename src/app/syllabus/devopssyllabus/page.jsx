import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import DevOpsSyllabus from "@/components/syllabus/devOpsSyllabus/DevOpsSyllabus";

const Devopssyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/devops.jpg"
        parent="Devopssyllabus"
        title="Devops-Syllabus"
      />
      <DevOpsSyllabus />
    </>
  );
};

export default Devopssyllabus;
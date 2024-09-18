import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Datas from "@/components/syllabus/datas/Datas";

const Dataengineersyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/data.jpg"
        parent="Dataengineersyllabus"
        title="DataEngineer-Syllabus"
      />
      <Datas />
    </>
  );
};

export default Dataengineersyllabus;
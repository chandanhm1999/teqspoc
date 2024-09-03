import MainSec from "@/components/home/contact/mainSec/MainSec";
import Instruct from "@/components/instructor/Instruct";
import React from "react";

const Instructor = () => {
  return (
    <>
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
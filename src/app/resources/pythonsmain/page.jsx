import React from "react";
import MainP from "@/components/mainCont/MainP";
import Demo from "@/components/home/demo/Demo";
import Pythonr from "@/components/resource/resourceSection/pythonr/Pythonr";

const Pythonsmain = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/pyt.jpg"
        parent="Python Questions & Answers"
        title="Python Questions & Answers"
      />
      <Pythonr />
      <Demo />
    </>
  );
};

export default Pythonsmain;

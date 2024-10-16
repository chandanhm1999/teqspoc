import React from "react";
import MainP from "@/components/mainCont/MainP";
import Demo from "@/components/home/demo/Demo";
import Pythons from "@/components/syllabus/pythons/Pythons";
import Amilr from "@/components/resource/resourceSection/aimlr/Amilr";

const Aiml = () => {
  return (
    <>
      <MainP
        url="/assets/resourse/aim.jpg"
        parent="AI/ML Questions & Answers"
        title="AI/ML Questions & Answers"
      />
      <Amilr />
      <Demo />
    </>
  );
};

export default Aiml;

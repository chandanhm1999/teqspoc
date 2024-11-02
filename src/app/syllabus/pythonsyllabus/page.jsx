import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Pythons from "@/components/syllabus/pythons/Pythons";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

const Pythonsyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/pythons.jpg"
        parent="Python-Syllabus"
        title="Python-Syllabus"
      />
      <Pythons />
      <ContactUsSection />
    </>
  );
};

export default Pythonsyllabus;

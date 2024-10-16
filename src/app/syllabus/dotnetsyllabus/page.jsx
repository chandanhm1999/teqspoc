import React from "react";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Dotnets from "@/components/syllabus/dotnets/Dotnets";
import ContactUsSection from "@/components/sysContact/ContactUsSection";

const Dotnetsyllabus = () => {
  return (
    <>
      <MainSec
        url="/assets/sys/dotnet.jpg"
        parent="Dotnetsyllabus"
        title="DotNet-Syllabus"
      />
      <Dotnets />
      <ContactUsSection />
    </>
  );
};

export default Dotnetsyllabus;

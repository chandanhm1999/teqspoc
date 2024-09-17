import Coursess from "@/components/coursespage/Coursess";
import Batchess from "@/components/home/batchess/Batchess";
import ContactForm from "@/components/home/contact/contactForm/ContactForm";
import Details from "@/components/home/contact/contactForm/Details";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Course from "@/components/home/course/Course";
import React from "react";

const Courses = () => {
  return (
    <>
      <MainSec
        url="/assets/contact/contacting.jpg"
        parent="Courses"
        title="Courses"
      />
      <Coursess />
      <Batchess />
    </>
  );
};

export default Courses;

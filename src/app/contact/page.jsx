import ContactForm from "@/components/home/contact/contactForm/ContactForm";
import Details from "@/components/home/contact/contactForm/Details";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import React from "react";

const Contact = () => {
  return (
    <>
      <MainSec
        url="/assets/contact/contacting.jpg"
        parent="Contact"
        title="Contact"
      />
      <ContactForm />
      <Details />
    </>
  );
};

export default Contact;

import ContactForm from "@/components/home/contact/contactForm/ContactForm";
import Details from "@/components/home/contact/contactForm/Details";
import MainSec from "@/components/home/contact/mainSec/MainSec";
import React from "react";

import { metadata } from "../layoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };
const Contact = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/contact"></link>
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

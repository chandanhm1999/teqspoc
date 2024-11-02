import React from 'react'
import MainSec from "@/components/home/contact/mainSec/MainSec";
import ContactUsSection from '@/components/sysContact/ContactUsSection';
import ScrummastersS from '@/components/syllabus/scrummasters/ScrummastersS';

import { metadata } from "../../courses/clayoutMetadata"; // Importing metadata

// Directly export the imported metadata
export { metadata };

const Scrummastersyllabus = () => {
  return (
    <>
    <link rel="canonical" href="https://www.teqspoc.com/syllabus/scrummastersyllabus"></link>
    <MainSec
        url="/assets/sys/scrum.jpg"
        parent="Scrummastersyllabus"
        title="Scrummaster-Syllabus"
      />
      <ScrummastersS />
      <ContactUsSection />
    </>
  )
}

export default Scrummastersyllabus